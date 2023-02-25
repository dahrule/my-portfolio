import React from 'react';

function ProjectDetail() {
  return (
    <div className='max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full min-h-screen'>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', paddingTop: '100px' }}>
        <div style={{ flex: 1, paddingRight: "50px" }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'justify' }}>Welcome to Our Website</h1>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia feugiat mauris, sit amet fringilla lorem pellentesque at. In lobortis sapien ac diam iaculis auctor. Sed vel enim ac risus semper aliquam. Etiam porta, felis eu fermentum faucibus, justo lectus consectetur elit, ac volutpat nisi tellus eget augue. Aliquam vitae tellus vel lacus euismod congue.</p>
        </div>
        <div style={{ flex: 1 }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '50px' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>Contribution</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <h2 style={{ fontWeight: 'bold' }}>Technology</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontWeight: 'bold' }}>Sector</h2>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;




