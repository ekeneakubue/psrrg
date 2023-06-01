import './carousel.css'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="images/cell1.jpg" class="d-block w-100 caro" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="images/cell3.jpg" class="d-block w-100 caro" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="images/cell2.jpg" class="d-block w-100 caro" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    </div>
  )
}
