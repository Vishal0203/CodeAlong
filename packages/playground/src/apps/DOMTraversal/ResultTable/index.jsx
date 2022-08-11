import React from 'react';
import { renderNode } from '@apps/DOMTraversal/helpers';

const Index = ({ results }) => (
  <table cellPadding={10}>
    <tbody>
      <tr>
        <th>In-order</th>
        <td>{renderNode(results.inOrder)}</td>
      </tr>
      <tr>
        <th>Pre-order</th>
        <td>{renderNode(results.preOrder)}</td>
      </tr>
      <tr>
        <th>Post-order</th>
        <td>{renderNode(results.postOrder)}</td>
      </tr>
      <tr>
        <th>BFS order</th>
        <td>{renderNode(results.bfsOrder)}</td>
      </tr>
    </tbody>
  </table>
);

export default Index;
