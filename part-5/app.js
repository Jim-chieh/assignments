function App() {
	return (
		<>
			<Nav />
			<Header />
			<Section />
			<Menu />
		</>
	);
}

function Nav() {
	const openMenu = () => {
		const menu = document.querySelector('.menu');
		menu.setAttribute('id', 'menu');
		console.log('add id');
	};
	return (
		<nav>
			<p>Website Title/Logo</p>
			<p
				className="nav-p"
				onClick={() => {
					openMenu();
				}}
			>
				<i className="fa-solid fa-bars"></i>
			</p>
			<ul className="nav-ul">
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
			</ul>
		</nav>
	);
}

function Header() {
	function toggleControler() {
		const h1 = document.querySelectorAll('h1');
		for (let i = 0; i < h1.length; i++) {
			h1[i].classList.toggle('header-toggle');
		}
	}

	return (
		<header
			onClick={() => {
				toggleControler();
			}}
		>
			<h1>Welcome Message</h1>
			<h1 className="header-toggle">Have a Good time!</h1>
		</header>
	);
}

function Section() {
	const showMore = () => {
		const Content = document.querySelector('#content-ul');
		Content.classList.toggle('content-ul');
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
				<button onClick={() => showMore()}>Call to action</button>
				<ul className="content-ul" id="content-ul">
					<li>Content Box 5</li>
					<li>Content Box 6</li>
					<li>Content Box 7</li>
					<li>Content Box 8</li>
				</ul>
			</section>
		</>
	);
}

function Menu() {
	const closeMenu = () => {
		const menu = document.querySelector('#menu');
		menu.removeAttribute('id');
	};
	return (
		<div className="menu">
			<ul className="menu-ul">
				<li>Item1</li>
				<li>Item2</li>
				<li>Item3</li>
				<li>Item4</li>
			</ul>
			<p className="menu-exit" onClick={() => closeMenu()}>
				X
			</p>
		</div>
	);
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
