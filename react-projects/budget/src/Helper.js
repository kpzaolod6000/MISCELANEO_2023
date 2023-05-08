export const checksBudget = (budget, rest) => {
    let class_;

    if ((budget / 4) > rest)
        class_= 'alert alert-danger';
    else if((budget / 2) > rest)
        class_= 'alert alert-warning';
    else
        class_= 'alert alert-success';

    return class_;
}