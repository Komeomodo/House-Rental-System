$(document).ready(() => {    
    $.ajax({
        url: 'http://localhost:3000/users',
        method: "get",
    }).done(data => {
        for(let i=0; i<data.length; i++) {
            $(".users").append(
                `<tr>
                    <td>${i+1}</td>
                    <td>${data[i].firstName}</td>
                    <td><button class="button btn-view-users" id=${data[i].id}>View User's Property</button></td>
                <tr>`
            )
            console.log(data[i].firstName)
        }

        $(".btn-view-users").on("click", function(e) {
            let personID = e.target.id
            $.ajax({
                url: `http://localhost:3000/listing?s=${personID}`,
                method: "get",
            }).done(data => {
               for(let i=0; i<data.length; i++) {
            
                    $('.view-property').append(
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
                                            </div>
                                        </div>
                                    </div>
                                
                    `
                    )
                    
                }
            })
        })
    })        
}) 