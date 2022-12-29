export const getALLproductwithcategoreyQuery={
    query:`
    {
      categoreys(sort: "priorityorder"){
        data{
          id
          attributes{
            name
            image{
              data{
                attributes{
                  url
                }
              }
            }
            products{
              data{
                id
                attributes{
                  Name
                  description
                  stock
                  product_Images{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                  product_details{
                    data{
                      id
                      attributes{
                        Rate
                        Qty
                        Measurment
                      }
                    }
                  }
                }
                        
                  
                  
              }
            }
          }
        }
            
      }
    }
    `
}