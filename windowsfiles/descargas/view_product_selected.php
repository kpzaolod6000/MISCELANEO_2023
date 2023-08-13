<?php

use yii\helpers\Html;
use app\models\Medicine;
use yii\grid\GridView;
use kartik\widgets\Growl;
use yii\bootstrap\Modal;

?>
<div class="panel-heading">PRODUCTOS SELECCIONADOS</div>
    <div class="panel-body">
        <div id = "grid_list_sales" class="contnt-div-entry">
            <?php
            echo GridView::widget([
                'tableOptions'=>['class' => 'table table-striped table-bordered'],
                'showFooter' => true,
                'footerRowOptions'=>['style'=>'font-weight:bold;text-align: right;'],
                'dataProvider' => $modelDetailSales->detailMedicineSales,
                'columns' => [
                    ['class' => 'yii\grid\SerialColumn'],
                    [
                        'attribute' => 'medicine_id',
                        'label' => 'Medicamento',
                        'value' => function($model)
                        {
                            //return $model->medicine->nameMedicine;por el group by no funciona
                            return Medicine::getNameMedicine($model['medicine_id']);
                        },
                    ],
                    [
                        'attribute' =>'quantityTotal',
                        'label' => 'Cantidad',
                    ],
                    [
                        'attribute' => 'price',
                        'label' => 'Precio',
                        'contentOptions' =>['style'=>'text-align: right;'],
                        'footer' => 'Total'
                    ],
                    [
                        'attribute' => 'salesTotal',
                        'label' => 'Total',
                        'contentOptions' =>['style'=>'text-align: right;'],
                        'footer' => $modelSales->getTotalListSales($modelSales->id),
                        /*'value' => function($model){
                            $salesTotal = $model->sumTotalSaleDetailSales;
                            return $salesTotal['saleTotal'];
                            //return Medicine::NameMedicine(medicine_id);
                        },*/
                    ],
                    [
                        'class' => 'yii\grid\ActionColumn',
                        'template'=>'{delete}{update}',
                        'visibleButtons'=>[
                            'view'=>false,
                        ],
                        'buttons'=>[
                            'delete'=>function ($url, $model) 
                            {
                                $urlDeDetailSales=Yii::$app->urlManager->createUrl(['detail-sales/medicine-sales-delete','medicine_id'=>$model['medicine_id'],'sales_id'=>$model['sales_id'],'warehouse_id' => $model['warehouse_id']]);
                                return Html::a('<span class="glyphicon glyphicon-remove"></span>', $urlDeDetailSales, 
                                [
                                    'class' => 'pressDeleteSale','title' => 'Eliminar'
                                ]);
                            },
                            'update'=>function ($url, $model) 
                            {
                                //$dataDetailSales = 
                                //$urlUpDetailSales=Yii::$app->urlManager->createUrl(['detail-sales/medicine-sales-update','medicine_id'=>$model['medicine_id'],'sales_id'=>$model['sales_id'],'warehouse_id' => $model['warehouse_id']]);
                                $urlUpDetailSales=Yii::$app->urlManager->createUrl(['detail-sales/medicine-update','medicine_id'=>$model['medicine_id'],'sales_id'=>$model['sales_id'],'warehouse_id' => $model['warehouse_id']]);
                                return Html::a('<span class="glyphicon glyphicon-pencil"></span>', $urlUpDetailSales, 
                                [
                                    'class' => 'pressUpdateSale',
                                    'title' => 'Modificar'
                                ]);
                            }
                        ]
                    ],
                ],
            ]);?>
        </div>
    </div>
</div>    
<?php
$js=<<<EOT
$(".pressDeleteSale").on("click",function(e){

    e.preventDefault();
    if(confirm("¿Está seguro de eliminar este elemento?"))
    {
        $.ajax({
            //recuperando la url del boton delete
            url: $(this).attr("href"),
            global: false, 
            type: "POST", 
            cache: false,
            dataType: "json",
            success: function(html) {
                //setTimeout(function(){ location.reload(); }, 500);

                if(html.status == 'ok'){
                    getProductSelected();
                    $("#detailsales-medicine_id").select2("open");
                    $.notify({
                            icon: 'glyphicon glyphicon-trash',
                            title: '<strong>Eliminado!</strong><br>',
                            message: html.msg,
                        },{
                            element: 'body',
                            type: "success",
                            allow_dismiss: true,
                            showProgressbar: false,
                            placement: {
                                from: "top",
                                align: "center"
                            },
                            delay:1000
                        }
                    );
                }else if (html.status == 'fail'){
                    $.notify({
                            icon: 'glyphicon glyphicon-warning-sign',
                            title: '<strong>Error inesperado!</strong><br>',
                            message: html.msg,
                        },{
                            element: 'body',
                            type: "error",
                            allow_dismiss: true,
                            showProgressbar: false,
                            placement: {
                                from: "top",
                                align: "center"
                            },
                            delay:1000
                        }
                    );
                }
                
            }
        });
    }
});
EOT;
?>
<?php
$urlSearch=Yii::$app->urlManager->createUrl(['sales/search-medicine','warehouse_id'=>$modelSales->id_warehouse]);
$js.=<<<EOT
$(".pressUpdateSale").click(function(e){
    e.preventDefault();
    var mid=0;
    var status = ""; 
    var msg = "";

        $.ajax({   
            url: $(this).attr("href"),
            global: false, 
            cache: false,
            dataType: 'json',   
            async: false, 
            success: function(html) {
                tmp=html.medicine_id;
                status = html.status;
                msg = html.msg
                getProductSelected();
            }
        });
    mid=tmp;
    //descarga data del medicamento
    var datos=[];

    if(status == 'ok'){
        $.ajax({   
            url: '{$urlSearch}',
            global: false, 
            cache: false,
            dataType: 'json',
            data: {
                id: mid
            },
            success: function(data) 
            {
                datos=data
                $('#detailsales-medicine_id').val(null).trigger('change');
                // console.log(datos);
                var newOption = new Option(datos.text, datos.id, true, true);
                $('#detailsales-medicine_id').append(newOption).trigger('change');
                $("#detailsales-stock").val(data.stock);
                $("#detailsales-quantity").focus();
            }
        });
    }else{
        $.notify({
            icon: 'glyphicon glyphicon-warning-sign',
            title: '<strong>Error Inesperado!</strong><br>',
            message: msg,
        },{
            element: 'body',
            type: "error",
            allow_dismiss: true,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "center"
            },
            delay:1000
        });
    }
   /*$.ajax({   
        url: $(this).attr("href"),
        global: false, 
        type: "POST",
        cache: false,
        dataType: 'json',
        success: function(html) {
            //alert(html.status);
            $('#ModalSales').modal('show');
            $("#ModalSales_detail").html(html.msg);   
        }
    });*/
});
EOT;
$this->registerJs(
    $js,
    yii\web\View::POS_READY,
    'update_list_sales');
$this->registerJsFile(
    '@web/js/bootstrap-notify.min.js',
    ['depends' => [\yii\web\JqueryAsset::className()]]
);    
?>
