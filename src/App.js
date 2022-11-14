import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [cartstatevariable,setstatevalue]=useState(0);
    const [productid,setid]=useState([{
        id:1,id:2,id:3,
    }]);
    const cartoperations=(e)=> {
        console.log("hello this is working");
        if(e.target.innerText==='Add to cart'){
          setstatevalue(cartstatevariable+1);
          e.target.innerText="Remove from Cart";
        }else{
            setstatevalue(cartstatevariable-1);
            e.target.innerText="Add to cart";  
        }
        }

      
    
  return (
  <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Shopping-shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartstatevariable}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shopping-shop</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
      
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUQERIRDxIRDw8QDxISEREQEhEREBESGRgaHBgVGBgcIS4nHB4rHxoYJjgmKy8xNzU1GiQ+Tkg0Py40ODEBDAwMEA8QHhISHjEhJCQ0MTQxNDQxNDQxMT80NDExNzQ9MTQxNDY0NDE2NjQ1NDE0NDE0MTQ/NDQ0MTg0MTQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABREAABAwICAwYQCgcHBQAAAAABAAIDBBEFIRIxYQYHQVFxsRMUFhciMlJTcnOBkZKTstElNDVUoaKjwcLSI0JiZHR14RUkM1Vls+JjgoPD8P/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgEEAgMBAAAAAAAAAAABAhEDBBIiMSFRQXGBYf/aAAwDAQACEQMRAD8A7MiIgIiICIsKsxSGCwmljjcdTXOAceRusoMxFpeqik1dG1/9OQj6Gr3qnpO/fZy/lTVG5Rafqnpe/fZy/lTqmpe/fZy/lTVG4Rafqmpe+/Zy/lTqmpe+/Zy/lU6qdNyi0p3T0vfvs5fyqxU7sqGKwkqo2E/qvJjdy2dYqNISFFGOr/DPnsHpJ1f4b8+g9JBJ0UY6v8N+fQeknV/hvz6D0kEnRRjq/wAN+fQeknV/hvz6D0kEnRRjq/w359B6S86vsNvbp2D0svOglCLVYduhpao2pqqCZ3cxyNLvNdbVAREQEREBERAREQEREEZ3X406ljDIjaaW9n5HQYO2cB3WYAvx3ztZc3nrGM7OVzi9/ZBoN5H8Gm9ztQ2nM7VIN279Ov0CTohkTOQXc4865Bj+IukkcbkB7ibDgbYWb5rDkCvPibW9RNo8cY86LWRl3c9HJd7IV04nbIwt9Y/3LmT6J7WaZFm6LHXy1O0tHO+vsXeZSPA650kVnm7mO0dI6y21xdTL9olSxmJ6RAbAHOJsAJHkk8QFlflrTGQJ4ZINLMODtIeiQL+QrWYNWshnY+UEszDi0XLbi2kBw+4lbndbjUFQ1jIHF7tJrnO0XNa0BpFs9ZN1N9p2yI3hwBaQ9rhdrm6iFWtDueqM5IyexsJG7DezvPceZbmZ9mOPE0lExp6ySesqm4fROEcjmdEqKjvEOWbbcJBabjPs2i4uVJ8P3u6CEDTidUyZl0k8jyXE6zotIb9B8q129rFpVGLTOzd022EHia0yZD6vmCnjirYYSzddHFhLN1ozuQoPmVP6KpO5Kg+ZU/ordOerLpFvOOfTpx4sfpzzdjU4bhj2QjDYaiZzNNw/w2tYSQDpWNySDlZRrqtof8lp/Xf8F0LdNuWgxFzHzF8csbdAPiLQXMuSGuDgQbEnzrQdbOl7/U+eL8qzy4s9/EmmGfByd17ZNfxHOq6h/wAlp/Xf8FMdyEeG4myS2HQwTRFokjcNMAOvYtdYXvonK2VlgDezpe/1Pni/KpRubwKHDmPZAXOdI4OkkkIc91r6IyAAAufOUx4s9+UThwcm/KTTKG5Gg+ZU/oqrqQoPmVP6H9Vs2yK8x6veOfTW8WM/CJYnvcUcg0qQSUNQ03ZJFJI5odwXa4nLwS0rYb3O6SeSWfC8SN62kza+9+ix5Z7dbTfhDgpC0qD4mTDumw2RuQnpix9tbrdFGfk0PMseTCSbjl5sJJuOtIiLBzCIiAiIgIiICIiDle7I2xF20xH6hXIa6n0gCNdrgnVqzBXXN2h+Ej/4/ZK5m0DRGlkLBaSbia0XQ5CNE30ctbhbLV5rnzrdYUzQbbbcnjK8aIybB7L8V8/MM/oWQ06BHk25fekiGRV4s2mtGyNs8+iC4y3MUd9Q0R2xVmn3SXIbVU8BiJsX0rOgys/aAGTrcRC01S7QneXi4c4u5QRkdtjnZW55mloDWkHstK5ve9rNHH/VRu+0W/KeYZH0OpIDg9jotJj29q+N1i1w5R963lSewf4B5lHMHBYaVj+3ZRAP4xpPc9rTyNc3zqQ1J/Rv8A8ysvF/e0ydig/1F+3hcplLJZQje8dZ2KfzJ/O5SSpqbLq4MO7GPQ6fHeMX5ahYklUtfUVe1a+Ws2rux4nbMZG3fVbVaNXtWifW7VZNbtWk4zcSNtXtV5lVtUWbW7VfZW7UvEn4SuOpWXFOorDWbVsKer2rLLiVuKTxyXUN3Q54/g/gv/GpDTVF1G8aN8ewfwX/AI1wdRh24uHqcdYuuoiLieeIiICIiAiIgIiIOTbt3WxJ3JH7JXIa+UktaDYHLyZX5/oXW93wPT0pGtrIiPICuV4pSWebZZ3aeLYfo8yv+Fr6WX4aQ1xH6jI3uIubafag5Wvw29xWTh05fHZ2ZYbX2f8AxC1+g85ZC4sSXDV51n0bNBthnxnVcpPfwpN/lekY140Xt0gO1INnN2AqukgijIe1he8dr0Q3Y08ejwnyqiW+iba9nEqaVxJOvRt5Lp+Vm9wiQumLnEuc5riXHMkm2alMhFs9WV+ThUbwemOk0nInsrcIbwX5eYLf1GbHAay0gKyZ6U7iZNF2J/zGTnctnW1evNR7c1NouxIf6hIfpcva6r15r1+iw3xyvS6fKTCLtRWbVrpavasGoqtqwJapdt1F8uaRsn1e1WzVbVqHVKtmpWV5IxvO3bararzKvao8KlXWVKTklTOdKIavatlT1m1Q6KqWxpqratZqtceaVO6Gq1ZrXV79LHcI5H/jWDQVerNViXTxzCtgd/7PcuDr8NYbZdTlLhXcERF4rzRERAREQEREBERByXdu74Ql4f0cXMVFavD2ya9akW674/Ny/ietQCtJ6XaJ2BZ5c6yYsKDRYxh20yOHMtuCqgVKNNWMNHe2+ser0OHWNwyNh4yXPI5A4kA7VngqsFEvaeIMGWZJuScyTxlXXHVyjnVAKplcQ0kZkC4HGVAj+F1GhNiLf3xx+vJ7lj1tVmc1hdMaFXXt7qpkPmkcPxLAqai5K9vpMpOnl/bTHk1jpdmqVhvnVh8isOcsObqGdztZDplR0VWCV5dceXPVe6sgSq42ZYd16CmPPTurYsqFnQVK0bXK/HKu7h6ja2PJYl1BVZjNbHDJ9LHcNJOQZw6h/iqJUdTYhbXAptPF6Xh0QW/ZuP3q/X5S8P8AYvnyd2On0yiIvCYiIiAiIgIiICIiDje7E/3+bl/E9acFbjduzQxCUE3u1rsuJxcfvWkBV56WXgVUCrIcvQ5SlkAr0FWQ5VByC+ChOrlHOrYcvHv0Rpdzn5s0Q59isujXVR46mcHyvcsSR91dx743VfxU3tuWNrbfiyP3FdPBzXHG4f2KVbcVTdelUrDPLdIIiLLaRERNj0FVtKtqoLbjz1UVlQyWW43Ev0sUpyeF7/8AbdZaJ40QL63C/IP6re737C/FKRoNi57wCdQvG5a9TzXOTH6I+qERFxpEREBERAREQEREHHd8A/CMni4+YqPAqQb4R+EZPFxcxUcBV56WXQ5VBysgr0FSL4cvQ5WHv0QXH9VpPmF1HpZC8lzzcn6NgQb58j3ShouyJhBc4i2mddgTr4stqyqh3YO8E8yiz3l3bEm2q5Jt51vKZmhBYknSZpZ6m3GoIIXj3xuq/ipvbcsWKUsNxY8BBzBHCCOJZWPfG6r+Km9tywFSXV3FWwlpNNplgu5gF5Ga3w8vG3id57FYCu01S6J4fG4se3MOabELatqKao+MA0kp1zU7A6Fx43w3GjysP/arWy/5U6jSIt6NzM0mdK+CtFr/AN3laZLbYn6Mg9FYsmAVbO3pKpvhU8o52quqaaxFtYdztY/tKSqdtEEthym1gFkHc66POsnpqQAi7DI2af1UWkQfC0U1TTRrYmm6AA6cdmRdkR7bY544G8Q1nkV818NPlRsc6T5zUBnRBtjjBLWcpLjxELVPeXEucS4kkkkkkk6yTxq0sn7FL3lxJJuSbkqS723yvReOPsOUYUn3tvlei8cfYcqIfUqIiAiIgIiICIiAiIg41viH4Sk8VFzFRoFSPfGPwlJ4qLmKjAKvPSy8CqgVZBVQKkXHC4IOogg+VR14LSWnWDYqQByx6ikZIdI3B4S22Y2ohpbrc0M7nwuDhkxui13Hlq8gsqXYaw6tJvIb386yXMDIy1os0NNkEMx743VfxU3tuWAs/HvjdV/FTe25YccZe4NaLucbALNDxjS4gAEkkAAC5JOoALbDCmQ2NdL0I5HpeJokqSMsnC4bHl3RvsKtCrFONGAgykEPnHbDjbEf1R+1rOwa9byqRuxi8EWVNRQ5C2nVufVSHbbsWD0Fdi3ZVsYtFM2FoyDYYKaJoHFZjAo8ibG/m3X1cmUz4qht8xPTU0t/K5hP0q3/AGlTzfGKRsZJH6Sie6IjaY3aTDyANWkRNjbS4SHtL6SUVTALuaG6FQwZXLorm4F9bS4DjWpVyKVzHBzHFrmm4c0lrmnjBGpZ75W1PbBrKngcAGsmPE4amu26jw55oNYpPvbfLFF44+w5RpwsbHIjIg8BUl3tvlei8cfYcoH1KiIgIiICIiAiIgIiIOK75B+EpPFRcxUZBUl3yT8JSeKi5iosCrz0sugr0FWwV6CpFwFVAq0CvQUF4FUzHsHeCeZUgryY9i7wSgiGPfG6r+Km9tysh2g0gZOcOyPCG8Xl4VmYrHpV1SODpqcnkD3LFqG5lMcdy1ncvnTERekLxVsWERFUEREBAiqaFaQXpTpjSPbCwce6HAeXgPkUg3t/lei8cfYctJTsvr1HI8i3u94zRxijadYncPquVs8daqsu7p9RIiLNYREQEREBERAREQcR3yz8JyeJi/EotdSnfN+U3+Ji/EopdXnpZWCvbqgFLqRdBXoKtXXoKC8CqZj2LvBKpBVMp7F3glBrjBp1lc7uaiUeeR3uWJVQZrf4dT6U+Iu/fHj68nvVmspNeS6MZ4Ry5ZedRWSJWS1buWl2LFfTLHKNZWssvLLPdTqjpdU7U7Ydl6GrM6XVTadO02ww1X44llspllw0q0xiLVFHAt1uRh0Mcov2pAfqOH3JRUmxbDBotDHcN2gH/dH3LTkngywy830KiIuR0CIiAiIgIiICIiDiG+b8pyeJh/EondSvfO+U5PEw/iUSurz0sruvbqgFe3Uiq69BVF17dBWCvJT2LvBK8BVMp7F3IUG93NwaUmJH9/kH1nrKrKHYsncNDpvxLZiMnO5b6por8C3wy8ZHHnPO1AJ6HYsKSi2KcT4fsWBLh+xVyXxqHOo9ipNHsUpfh+xUGg2Kul9oyKPYq20exSMUGxXWYfsTRtoI6LYs6noNi3cOH7FsIKDYrYqZVrKKh2K3HDoY7hW0H6Oie9SumorcC0mIR6GPYRtD/wAanky8dKcc85XZURFyuoREQEREBERAREQcO3z/AJTf4mL8SiN1Ld9A/CcmyGLmKiKtFlV17dUL1SKrr26oXqkV3VEp7F3IUuqZe1PIUHQ97WPSdin8yk53KYyU11Fd63M4oRmP7Tfb6ynbmJMtRhljutFLR7FhyUGxSR0Stup1buR2os7D9itHD9ilLqVUmlU7NIw3D9ivMw/YpCKUKttMncaaSOh2LMio9i2bYFdbEo7kdrDjplD90DNHH8G8GTneugtYoHuoy3QYLwdg/neq5Zbi+OOrt1ZERZtBERAREQEREBERBxDfTjLcTcTqfTROB483j7lDl2HfQ3OvqomVUDS+amDg5jRdz4jmdEcJaRe3ETwrjwKtPSRerxFKXqLxEHqpk7U8hVSFB0betkHRsXj/AFhXCS37LjJb2V0JcMwLG3UFSK5jXTRmJsNfC0nT0G6IbO2+vINzP62kDYOBXW8L3UUVU0GCrgcXC+g6Rsco47sdZ30KFLG3IXharXTsXfYvWM96dOxd9i9Yz3ptVd0V5oK107F32P1jPenTsXfY/WM96bTpd0F7oqz07F32P1jPenTsXfY/WM96bNL2ivbKz07F32L1jPenTsXfYvWM96bQvrn+6AmTdLhUbRfodO57jxXMuv0R51IMb3aUNExzpKmOR7b2hge2WVzrdrZp7HldYLUb3OFz1dXPjdbGYnTt0KWJ1+wiyFxfgsAAbC+Z4Uq0dOREVUiIiAiIgIiICIiAo7i+42irHF8sDWyE3MkZdG5x43aNtLyqRIghHWyof3jyS/0TrY0PHUetHuU2RN0QnrY0PHUetH5U62NDx1HrR+VTZE3RCetjQ8dR60flTrY0PHUetH5VNkTdEKbvaUTSHNdVMe3U5s1iPLoqxUb1WHyG72PJ4S0tjJ8jA0fQp6ibHPRvQYbn2NRydGOX0L3rQYZ3NR64+5dBRBz7rQYZ3NR64+5OtBhnc1Hrj7l0FEHPutBhnc1Hrj7k60GGdzUeuPuXQUQc+60GGdzUeuPuTrQYZ3NR64+5dBRBEcJ3u8OpHCSOma97TcOmc6Wx4wHGwUsAtkMgqkQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/9k=" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">I-Phone</h5>
                                   
                                    $40.00 - $80.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top:'0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="data:image/jpeg;base64,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" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                            
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs4vyz-riQI3cXujXWiQ6UYo_yZIHpUPkuA&usqp=CAU" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                   
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeCz0RKQ3zCpY4ar-l2Frg_5_uDOh1MipIg&usqp=CAU" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                
                                    $40.00
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/61gGjlhlPpL._SX679_.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Sale Item</h5>
                                   
                                    <span className="text-muted text-decoration-line-through">$50.00</span>
                                    $25.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/31iE517+NFL._SY300_SX300_.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                   
                                    $120.00 - $280.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            
                            <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem', right: '0.5rem'}}>Sale</div>
                          
                            <img className="card-img-top" src="https://m.media-amazon.com/images/I/31aFR1dtSaL.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Special Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                   
                                    <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                          
                            <img className="card-img-top" src="https://5.imimg.com/data5/SELLER/Default/2020/12/HU/PE/XE/1553719/dymo-mobile-labeler-500x500.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">Popular Item</h5>
                                   
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                   
                                    $40.00
                                </div>
                            </div>
                         
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" onClick={(e)=>cartoperations(e)} href="#">Add to cart</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
        </footer>
        
       
   </>     
  );
}


export default App;
