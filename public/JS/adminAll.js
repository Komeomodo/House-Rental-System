$(document).ready(() => {
    $.ajax({
        url: "http://localhost:3000/listing",
        method: "get",
    }).done(data => {
        for(let i=0; i<data.length; i++) {
            $('.listing').append(
                `
                <div class="col-md-4 col-sm-6 mb-20">
                    <div class="card text-center">
                        <div class="card-block">
                            <img src=${data[i].image_url} class="img-fluid"/>
                            <div class="card-title">
                                <h4>${data[i].price}</h4>
                                
                                <h5>${data[i].location}</h5>
                            </div>
                            <a href="#" class="btn btn-success btn-view" id=${data[i].id} style="margin-bottom: 10px;">View Property</a>
                        </div>
                    </div>
                </div>
                `
            )
        }
        
$('.btn-view').on("click", e => {
    e.preventDefault()
    $(".modals").css("display", "block")
    let  view_id = e.target.id
    // alert(view_id)
    // window.location = "view.html"
    $.ajax({
        url: `http://localhost:3000/listing/${view_id}`,
        method: "get",
    }).done((data) => {
        console.log(data.name)
        $(".views").html(
            `
            <h1 style="text-align: center; margin-bottom: 30px;"> Viewed Property</h1>
            <div class="col-12" style="display: grid; grid-template-columns: repeat(2, 1fr); grid-gap: 20px;">
                <div>
                    <img src=${data.image_url} class="img-fluid"/>
                </div>
                <div>
                    <h4>Location:  ${data.location}</h4>
                    <h4>Price:  ${data.price}</h4>
                    <h4>Description:  ${data.description}</h4>
                </div>
            </div>
            `
        )
        console.log(data)
        // console.log()
        
    })
    })

})

})