export default (props) => {
    if (props.error) return <p className='alert-danger'>{props.error.message}</p>;
    return null;
};
