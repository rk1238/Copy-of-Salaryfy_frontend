import $ from "jquery";


$('.client-card-slider').slick({

    dots: false,
    
    infinite: true,
    
    slidesToShow: 2,
    
    slidesToScroll: 1,
    
    autoplay: true,
    
    autoplaySpeed: 2200,
    
    arrows: false,
    
    slidesToScroll: 1,
    
    responsive: [
    
    {
    
    breakpoint: 1024,
    
    settings: {
    
    slidesToShow: 1,
    
    slidesToScroll: 1,
    
    infinite: true,
    
    dots: false
    
    }
    
    },
    
    {
    
    breakpoint: 800,
    
    settings: {
    
    slidesToShow: 1,
    
    slidesToScroll: 1,
    
    infinite: true,
    
    }
    
    },
    
    {
    
    breakpoint: 600,
    
    settings: {
    
    slidesToShow: 1,
    
    // dots: true,
    
    slidesToScroll: 1
    
    }
    
    },
    
    {
    
    breakpoint: 480,
    
    settings: {
    
    slidesToShow: 1,
    
    // dots: true,
    
    slidesToScroll: 1
    
    }
    
    }
    
    ]
    
    });


    $('.customers-review-slider').slick({

        dots: false,
        
        infinite: true,
        
        slidesToShow: 3,
        
        slidesToScroll: 1,
        
        autoplay: true,
        
        autoplaySpeed: 2200,
        
        arrows: false,
        
        slidesToScroll: 1,
        
        responsive: [
        
        {
        
        breakpoint: 1024,
        
        settings: {
        
        slidesToShow: 1,
        
        slidesToScroll: 1,
        
        infinite: true,
        
        dots: false
        
        }
        
        },
        
        {
        
        breakpoint: 800,
        
        settings: {
        
        slidesToShow: 1,
        
        slidesToScroll: 1,
        
        infinite: true,
        
        }
        
        },
        
        {
        
        breakpoint: 600,
        
        settings: {
        
        slidesToShow: 1,
        
        // dots: true,
        
        slidesToScroll: 1
        
        }
        
        },
        
        {
        
        breakpoint: 480,
        
        settings: {
        
        slidesToShow: 1,
        
        // dots: true,
        
        slidesToScroll: 1
        
        }
        
        }
        
        ]
        
        });