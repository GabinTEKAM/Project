exports.getCar = (params) => {
    return `Select id_car, cat_name, brand_name, model, feesperday from cars 
    Inner join
    category cat  on cat.id_cat  = cars.id_cat 
    inner join  brand b on b.id_brand = cars.id_brand 
    where  cars.id_cat in ( ${params} ) ;
    )
    `
}

const getRental = (date) => {
    return ` 
    `
}