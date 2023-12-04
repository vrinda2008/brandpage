const Hero=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET
                     DESERVE
                      THE BEST</h1>
                <p>SoulSync an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon"></img>
                        <img src="/images/flipkart.png" alt="flipkart"></img>
                    </div>
                </div>
            </div>
            <div className="hero-image"></div>
            <img src="/images/shoe.png" alt="jj"></img>
        </main>
    )
}
export default Hero;