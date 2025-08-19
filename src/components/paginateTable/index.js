const PaginateTable = () => {
  return (
    <div className="paginate-table-wrapper bg-white px-4 py-5">
        <h2 className="sub-headline mb-5 text-center">List of Family Members / કુટુંબના સભ્યોની યાદી</h2>
        <div className="paginate-table-inner-wrapper">
            <div className="row">
                <div className="col-3 offset-9">
                    <input className="form-control" name="search" placeholder="Search..." />
                </div>
            </div>
            <div className="table-responsive my-4">
                <table className="table table-bordered table-striped paginate-table">
                    <thead>
                    <tr>
                        <th>Full name</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>1990-01-01</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>1995-05-15</td>
                        <td>25</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="table-pagination-controls">
                <a href="#" className="btn btn-paginate">Previous</a>
                <a href="#" className="btn btn-paginate">1</a>
                <a href="#" className="btn btn-paginate">2</a>
                <a href="#" className="btn btn-paginate">3</a>
                <a href="#" className="btn btn-paginate btn-active">4</a>
                <a href="#" className="btn btn-paginate btn-paginate-dots">...</a>
                <a href="#" className="btn btn-paginate">9</a>
                <a href="#" className="btn btn-paginate">10</a>
                <a href="#" className="btn btn-paginate">11</a>
                <a href="#" className="btn btn-paginate">12</a>
                <a href="#" className="btn btn-paginate">Next</a>
            </div>
        </div>        
    </div>
  );
};

export default PaginateTable;