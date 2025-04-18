import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Welcome to Kubernetes Learning V2 (Learning Rollout) </h1>
        <p className="subtitle">Master the art of container orchestration</p>
      </header>

      <main className="content-section">
        <div className="card">
          <h2>What is Kubernetes?</h2>
          <p>
            Kubernetes (K8s) is an open-source container orchestration platform
            that automates the deployment, scaling, and management of
            containerized applications. It provides a framework to run
            distributed systems resiliently, taking care of scaling and failover
            for your applications.
          </p>
        </div>

        <div className="card">
          <h2>Why Learn Kubernetes?</h2>
          <ul>
            <li>Industry standard for container orchestration</li>
            <li>High demand for Kubernetes skills</li>
            <li>Scalable and resilient application deployment</li>
            <li>Cloud-native development expertise</li>
          </ul>
        </div>

        <div className="card">
          <h2>Getting Started</h2>
          <p>
            Begin your Kubernetes journey by understanding core concepts like:
          </p>
          <ul>
            <li>Pods and Containers</li>
            <li>Services and Networking</li>
            <li>Deployments and ReplicaSets</li>
            <li>ConfigMaps and Secrets</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
