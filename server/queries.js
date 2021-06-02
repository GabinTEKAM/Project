exports.getCar = (params) => {
    return `Select id_car, cat_name, brand_name, model, feesperday from cars 
    Inner join
    category cat  on cat.id_cat  = cars.id_cat 
    inner join  brand b on b.id_brand = cars.id_brand 
    where  cars.id_cat in ( ${params} ) ;
    )
    `
}

exports.addRental = () => {
    return   `INSERT INTO rentals ( startDate, endDate,
        extraDriver, distance, extraInsurance, 
       driverAge, id_car, id_user, amount)
       VALUES ( Date(?), DATE(?) ,? ,? ,? ,? ,? ,?,?);`
    
}

exports.getVeh = ()=>{
 return  ` SELECT id_car, model
    FROM cars
    where id_car
    not IN (SELECT id_car 
    from rentals 
    where endDate >= ?);`

}