export default (props) => (
    <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
            TodoList
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'></ul>
            <div class='form-inline my-2 my-lg-0'>
                <button onClick={props.signOut} class='btn btn-outline-danger my-2 my-sm-0'>
                    Sign out
                </button>
            </div>
        </div>
    </div>
);
