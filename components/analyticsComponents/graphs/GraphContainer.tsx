import React from 'https://esm.sh/react';
import LatencyGraph from './LatencyGraph.tsx';
import QuerySuccessFailureGraph from './QuerySuccessFailureGraph.tsx';
import DataSizeGraph from './DataSizeGraph.tsx';
<<<<<<< HEAD
import QueryPerAPIGraph from './QueryPerAPIGraph.tsx';
import { Action, InitialState } from '../../typings/viewController.d.ts';
import { Result, Snapshot } from '../../typings/data.d.ts';
=======
import QueryPerAPIGraph from './QueryPerAPIGraph.tsx'
import QuerySnapshot from './QuerySnapshot.tsx'
>>>>>>> 46db2755975e8d0a621472403621888c4f13d687
import '../../../style/graphs.css';

interface Props {
  view: InitialState;
  setView: React.Dispatch<Action>;
  snapshotArray: [Snapshot] | null;
  aggregateMetrics: Result | null;
}

const GraphContainer = (props: Props) => {
  const { view, setView, snapshotArray, aggregateMetrics } = props;

  return (
    <>
      <div className="container-analytics">
<<<<<<< HEAD
        {view === 0 && (
          <LatencyGraph
            snapshotArray={snapshotArray}
            aggregateMetrics={aggregateMetrics}
          />
        )}
        {view === 1 && (
          <QuerySuccessFailureGraph aggregateMetrics={aggregateMetrics} />
        )}
        {view === 2 && (
          <DataSizeGraph
            snapshotArray={snapshotArray}
            aggregateMetrics={aggregateMetrics}
          />
        )}
        {view === 3 && <QueryPerAPIGraph aggregateMetrics={aggregateMetrics} />}
=======
        {viewIndex === 0 && <LatencyGraph snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 1 && <QuerySuccessFailureGraph aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 2 && <DataSizeGraph snapshotArray={snapshotArray}
        aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 3 && <QueryPerAPIGraph aggregateMetrics={aggregateMetrics} />}
        {viewIndex === 4 && <QuerySnapshot snapshotArray={snapshotArray} />}
>>>>>>> 46db2755975e8d0a621472403621888c4f13d687
      </div>
    </>
  );
};

export default GraphContainer;
