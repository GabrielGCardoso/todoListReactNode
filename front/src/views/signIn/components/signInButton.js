export default (props) => {
    return (
        <input
            type='submit'
            onClick={props.onClick}
            disabled={props.isDisabled}
            className='fadeIn fourth'
            value='sign in'
        />
    );
};
