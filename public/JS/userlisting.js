$(document).ready(() => {
    let s = sessionStorage.getItem("lock")
    
    let updUrl
    console.log(updUrl)
    
    $.ajax({
        url: `http://localhost:3000/listing?s=${s}`,
        method: "get",
    }).done(data => {
        console.log(data)
        for(let i=0; i<data.length; i++) {
            
            $('.listing').append(
                `
                            <div class="col-md-4 col-sm-6 mb-20" style="padding: 20px;">
                                <div class="card text-center">
                                    <div class="card-block">
                                        <img src=${data[i].image_url}  class="img-fluid"/>
                                        <div class="card-title">
                                            <h4>${data[i].name}</h4>
                                            <h4>${data[i].price}</h4>
                                            <h5>${data[i].location}</h5>
                                        </div>
                                        <div class="card-text">
                                            <p>${data[i].description}
                                            </p>
                                        </div>
                                        <a href="#" class="btn btn-success btn-update" id=${data[i].id} style="margin-bottom: 10px;">Update</a>
                                        <a href="#" class="btn btn-danger btn-del" id=${data[i].id} style="margin-bottom: 10px;">Delete</a>
                                        <i class="fas fa-trash-alt"></i>
                                    </div>
                                </div>
                            </div>
                        
            `
            )
            
        }
        $('.btn-del').on("click", e =>{
            let  delete_id = e.target.id
            $.ajax({
                url: `http://localhost:3000/listing/${delete_id}`,
                method: "delete",
            }).done(() => {
                alert('Post deleted successsfully!')
                window.location = "mylisting.html"
            })
    
        })

        $('.btn-update').on("click", e =>{
            $(".modals").css("display", "block")
            let  update_id = e.target.id
            updUrl = `http://localhost:3000/listing/${update_id}`
            
            $.ajax({
                url: updUrl,
                method: "get",
            }).done(datas => {
                $("#name").val(`${datas.name}`)
                $("#location").val(`${datas.location}`)
                $("#price").val(`${datas.price}`)
                $("#description").val(`${datas.description}`)
                console.log(datas.location)
                
            })
    
        })
        
    })
    $('.btn-upd').on("click", (e) => {
        console.log(updUrl)
        e.preventDefault()
        let name = $("#name").val()
        let location = $("#location").val()
        let price = $("#price").val()
        let description = $("#description").val()
        $.ajax({
            url: updUrl,
            method: "patch",
            data: {
                name,
                location,
                price,
                description
            }
        })
    })
    console.log(updUrl)

})