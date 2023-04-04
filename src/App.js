import { useEffect, useState } from 'react';

import Tree from './components/Tree';
import treeJSON from './data/treeData.json';

function App() {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => setTreeData(treeJSON), []);

  return <Tree treeData={treeData} />;
}

export default App;
