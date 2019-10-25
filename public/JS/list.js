$(document).ready(() => {

    // $('form' ).submit(function ( e ) {
    //     var data;
    
    //     data = new FormData();
    //     data.append('file', $('#file')[0].files[0]);
    //     data.append('name', $('#name').val());
    //     data.append('price', $('#price').val())
    //     data.append('description', $('#description').val())

    
    //     console.log($('#file')[0].files);
    //     console.log(data);
    //     e.preventDefault();
    // });

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

    $('#post-listing').submit(e => {
        e.preventDefault();
        let  file = $("#file").val()
        let location = $("#location").val()
        let price = $("#price").val()
        let description = $("#description").val()
        let name = $("#name").val()
        let s = sessionStorage.getItem("lock")


        const splitImage = file.split('\\');
        splitImage.shift();
        splitImage.shift();
        const image = `./images/${splitImage}`;
        alert('Posted');
        $.ajax({
            url: "http://localhost:3000/listing",
            method: "post",
            data: {
                name,
                image_url: image,
                location,
                price,
                description,
                s
            }
        }).done(() => {
            window.location = 'mylisting.html'
        })
    })

})

// $('.btn-view').on("click", e => {
//     e.preventDefault()
//     $(".modals").css("display", "block")
//     let  view_id = e.target.id
//     // alert(view_id)
//     // window.location = "view.html"
//     $.ajax({
//         url: `http://localhost:3000/listing/${view_id}`,
//         method: "get",
//     }).done((data) => {
//         console.log(data.name)
//         $(".view").html(
//             `
//             <div class="col-6 col-md-4">
//                 <img src=${data[i].image_url} class="img-fluid"/>
//                 <h4>${data.location}</h4>
//                 <h4>${data.price}</h4>
//                 <h4>${data.description}</h4>
//             </div>
//             `
//         )
//         console.log(data)
//         // console.log()
        
//     })

})
// function viewListing() {
//     console.log('ewf')
//     setTimeout(() => {
//         console.log('window.location.href')
//     }, 100)
//     console.log('hkbwf')

//     $.ajax({
//         url: "http://localhost:3000/listing/1",
//         method: "get",
//     }).done(data => {
//         $('#s-price').innerHTML = data.price;
//         $('#s-location').innerHTML = data.location;
//         $('#description').innerHTML = data.description;
//     })
// }

console.log(sessionStorage.getItem("lock"))