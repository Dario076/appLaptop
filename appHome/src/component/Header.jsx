import './Header.css'
import 'app.css'
function Header() {
    return (
        <>
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                        <img src="./public/img/35202481_laptop_cartoon 2.svg" alt="logo" className="logo-pequeno" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div className="carrito">
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                <p className="text-center">El carrito está vacío</p>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="img-fluid" src="./public/img/laptop_01.jpg" alt="imagen laptop" />
                                            </td>
                                            <td>MacBook Pro</td>
                                            <td className="fw-bold">
                                                $1299
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    -
                                                </button>
                                                1
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p className="text-end">Total a pagar: <span className="fw-bold">$1299</span></p>
                                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
