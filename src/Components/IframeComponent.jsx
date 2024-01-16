
  const  IframeComponent = ({ url }) => {

    return (
        <div style={{ width: 'auto', height: '79vh', border: '1px solid black' }}>
            <iframe
                src={url}
                title="Embedded Page"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default IframeComponent;
