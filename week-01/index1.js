const h1Title = (
	<h1>
		<a href="index1.html">React Bootcamp</a>
	</h1>
);

const mainHeading = <h3>Home</h3>;

const pOne = <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>;

const pTwo = <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>;

const footerContent = <p>2020 React Bootcamp. Bharath</p>

function Header() {
	return (
		<header className="site-header">
			{ h1Title }
		</header>
	);
}

function Main() {
	return (
		<main className="main-content">
		{ mainHeading },
		{ pOne },
		{ pTwo }
		</main>
	);
}

function Footer() {
	return (
		<footer className="site-footer">
		{ footerContent }
		</footer>
	);
}

function App() {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	);
}

ReactDOM.render (
	App(),
	document.getElementById('site-container')
);