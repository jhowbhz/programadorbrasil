import './Bootstrap.css';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function getData()
{
    try {

        return axios.get('https://api.github.com/search/repositories?q={vagas}{&page,per_page,sort,order}', 'article')
        // .then((response) => {
            
        //     //console.log(response?.data)
        // });

    } catch (error) {
        return error;
    }

}

const App = () => {
     
    const [ results, setResult ] = useState([]);

    useEffect( () => {
     
        const results = getData();
        setResult(results);

    }, []);

    return <>
        <div className='container' id="root">
            <div className="row">
                <div className="col-lg-12 card-margin">
                    <div className="card search-form">
                        <form id="search-form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row no-gutters">
                                        <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option checked>Filtrar</option>
                                                <option>London</option>
                                                <option>Boston</option>
                                                <option>Mumbai</option>
                                                <option>New York</option>
                                                <option>Toronto</option>
                                                <option>Paris</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                            <input className="form-control" id="example" placeholder="Procure sua vaga" ></input>
                                        </div>
                                        <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                            <button type="submit" className="btn btn-base">
                                                🔍
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card card-margin">
                        <div className="card-body">
                            <div className="row search-body">
                                <div className="col-lg-12">
                                    <div className="search-result">
                                        <div className="result-body">
                                            <div className="table-responsive">

                                                <table className="table widget-26">
                                                    <tbody>

                                                        { results?.map(({id, score, title}, index ) => {
                                                                return (
                                                                    <tr key={id}>
                                                                        <td>{id}</td>
                                                                        <td>{score}</td>
                                                                        <td>{title}</td>
                                                                    </tr>
                                                                );
                                                        })}
                                                        
                                                        <tr>
                                                            <td>
                                                                <div className="widget-26-job-emp-img">
                                                                    <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Company" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="widget-26-job-title">
                                                                    <a href="https://bootdey.com">Senior Software Engineer / Developer</a>
                                                                    <p className="m-0"><a href="https://bootdey.com" className="employer-name">Axiom Corp.</a> <span className="text-muted time">1 days ago</span></p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="widget-26-job-info">
                                                                    <p className="type m-0">Full-Time</p>
                                                                    <p className="text-muted m-0">in <span className="location">London, UK</span></p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="widget-26-job-salary">R$ 50,00/hr</div>
                                                            </td>
                                                            <td>
                                                                <div className="widget-26-job-category bg-soft-base">
                                                                    🟢 <span>Software Development</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="widget-26-job-starred">
                                                                    <a href="https://bootdey.com" className="text-decoration-none">
                                                                        🌟
                                                                    </a>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        
                                                    </tbody>

                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <nav className="d-flex justify-content-center">
                                <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                                    <li className="page-item">
                                        <a href="https://bootdey.com" className="page-link no-border">
                                            <span aria-hidden="true">Anterior</span>
                                            <span className="sr-only">Anterior</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a href="https://bootdey.com" className="page-link no-border">1</a></li>
                                    <li className="page-item"><a href="https://bootdey.com" className="page-link no-border">2</a></li>
                                    <li className="page-item"><a href="https://bootdey.com" className="page-link no-border">3</a></li>
                                    <li className="page-item"><a href="https://bootdey.com" className="page-link no-border">4</a></li>
                                    <li className="page-item">
                                        <a href="https://bootdey.com" className="page-link no-border"> <span aria-hidden="true">Avançar</span> </a>
                                    </li>
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    </>
};

export default App;
