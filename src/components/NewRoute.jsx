return (
  <div>
    <h1>Upload a new route</h1>
    <form onSubmit={handleFormSubmission}>
    <textarea
      id='routeInfo'
      placeholder='Upload your map'
      ref={(textarea) => { _routeInfo = textarea; }} />
      <button type='submit'>Upload</button>
    </form>
  </div>
)