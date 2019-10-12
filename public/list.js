$(document).ready(() => {
    
    $.ajax({
        url: "http://localhost:3000/listing",
        method: "get",
    }).done(data => {
        for(let i=0; i<data.length; i++) {
            $('.listing').append(
                `
                <div class="col-md-4 col-sm-6">
                    <div class="card text-center">
                        <div class="card-block">
                            <img src="images/${data[i].picture}" class="img-fluid"/>
                            <div class="card-title">
                                <h4>${data[i].price}</h4>
                                <h5>${data[i].location}</h5>
                            </div>
                            <div class="card-text">
                                <p>${data[i].description}
                                </p>
                            </div>
                            <a href="#" class="btn btn-primary" style="margin-bottom: 10px;">Edit</a><a href="#" class="btn btn-success" style="margin-bottom: 10px;">View Property</a><a href="#" id="delpro${data[i].id}" class="btn btn-danger delete" style="margin-bottom: 10px;">Delete Property</a>
                        </div>
                    </div>
                </div>
                `
            )
        }
        
    })

    $('#post-listing').submit(e => {
        e.preventDefault();
        let  picture = $("#picture").val()
        let location = $("#name").val()
        let price = $("#price").val()
        let description = $("#description").val()
        alert('clicked');
        console.log("ewfddf")

        $.ajax({
            url: "http://localhost:3000/listing",
            method: "post",
            data: {
                image_url: picture,
                location,
                price,
                description
            }
        })
    })

    // To delete
    $('.delete').on("click", e =>{
        let  delete_id = e.target.id('delpro').join('')
        $.ajax({
            url: "http://localhost:3000/listing"+delete_id,
            method: "delete",
        }).done(delete_pro =>{
            alert('Post deleted successsfully!')
            window.location = "index.html"
        })

    })

})