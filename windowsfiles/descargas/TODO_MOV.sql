# CREAR VARIABLES
-- SET @medCod=03513; -- 04523
SET @medCod=00808;
-- SET @sales_id=106036;

SELECT @medId:=id AS medId,medcod,mednom,medpres,medcnc,medtip,medpet,medff,codigo_sig,medhab
FROM medicine
WHERE medcod=@medCod;

SELECT id,quantity,lote,date_vnt,id_type_entry,medicine_id,warehouse_id
FROM inventory_det
WHERE medicine_id=@medId
ORDER BY warehouse_id;

SELECT id,id_type_entry,`code`,ref,`status`,created,modified,warehouse_id
FROM entry
WHERE id IN (
SELECT DISTINCT entry_id
FROM detail_entry
WHERE medicine_id=@medId);

SELECT id,quantity,lote,date_vnt,price,`status`,created,created_by,modified,entry_id
FROM detail_entry
WHERE medicine_id=@medId;

SELECT id,id_destination_warehouse,`reference`,id_type_entry,`status`,created,modified,id_origin_warehouse,type_transfer
FROM discharge
WHERE id IN (
SELECT DISTINCT discharge_id
FROM detail_discharge
WHERE medicine_id=@medId);

SELECT id,quantity,lote,date_vnt,price,`status`,created,created_by,discharge_id
FROM detail_discharge
WHERE medicine_id=@medId;

SELECT *
FROM sales
WHERE id IN (
SELECT DISTINCT sales_id
FROM detail_sales
WHERE medicine_id=@medId);

SELECT id,quantity,lote,date_vnt,price,`status`,id_type_entry,`create`,create_by,`modify`,modify_by,sales_id,warehouse_id
FROM detail_sales
WHERE medicine_id=@medId
ORDER BY `create`;

SELECT * 
FROM detail_sales_view 
WHERE mId = @medId;


SELECT *
FROM warehouse_product
WHERE medicine_id=@medId
ORDER BY warehouse_id,created;

SELECT stock,lote,date_vnt,id_type_entry,warehouse_id,date_backup,type_report FROM warehouse_product_historical WHERE medicine_id=@medId
	AND CAST(date_backup AS DATE)>='2023-02-13' ORDER BY warehouse_id,date_backup;