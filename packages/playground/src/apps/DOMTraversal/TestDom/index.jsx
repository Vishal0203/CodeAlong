import React, { useEffect } from 'react';
import selectors from './utils';

const TestDom = () => {
  const { getElementById, getElementsByClass, querySelector } = selectors;
  useEffect(() => {
    console.log(getElementById('lookup-id'));
    console.log(getElementsByClass('lookup-class'));
    console.log(querySelector('#lookup-id .lookup-class'));
    console.log(querySelector('#nested-dom-lookup-id .lookup-class'));
    console.log(querySelector('#nested-dom-lookup-id .dummy'));
  }, []);

  return (
    <div>
      <div id="lookup-id">
        <section className="lookup-class"></section>
      </div>
      <div className="lookup-class"></div>
      <div>
        <div>
          <div id="nested-dom-lookup-id">
            <p className="lookup-class"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDom;
