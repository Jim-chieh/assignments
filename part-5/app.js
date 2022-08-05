const { useState } = React;

function Nav() {
	const [menuId, setMenuId] = React.useState('');
	const controlMenu = () => {
		if (menuId === '') {
			setMenuId('menu');
		} else {
			setMenuId('');
		}
	};
	return (
		<>
			<nav>
				<p>Website Title/Logo</p>
				<p className="nav-p" onClick={controlMenu}>
					<i className="fa-solid fa-bars"></i>
				</p>
				<ul className="nav-ul">
					<li>Item1</li>
					<li>Item2</li>
					<li>Item3</li>
					<li>Item4</li>
				</ul>
			</nav>
			<div className="menu" id={menuId}>
				<ul className="menu-ul">
					<li>Item1</li>
					<li>Item2</li>
					<li>Item3</li>
					<li>Item4</li>
				</ul>
				<p className="menu-exit" onClick={controlMenu}>
					X
				</p>
			</div>
		</>
	);
}

function Header() {
	const [message, setMessage] = React.useState('Welcome Message');
	const toggleControler = () => {
		if (message === 'Welcome Message') {
			setMessage('Have a Good Time');
		} else {
			setMessage('Welcome Message');
		}
	};
	return (
		<header onClick={toggleControler}>
			<h1>{message}</h1>
		</header>
	);
}

function Section() {
	const [className, setClassName] = React.useState('content-ul');
	const showMore = () => {
		if (className === '') {
			setClassName('content-ul');
		} else {
			setClassName('');
		}
	};
	return (
		<>
			<section className="section-title">
				<h2>Section Title</h2>
			</section>
			<section className="section-content">
				<ul>
					<li>Content Box 1</li>
					<li>Content Box 2</li>
					<li>Content Box 3</li>
					<li>Content Box 4</li>
				</ul>
				<button onClick={showMore}>Call to action</button>
				<ul className={className}>
					<li>Content Box 5</li>
					<li>Content Box 6</li>
					<li>Content Box 7</li>
					<li>Content Box 8</li>
				</ul>
			</section>
		</>
	);
}

function App() {
	return (
		<>
			<Nav />
			<Header />
			<Section />
		</>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
