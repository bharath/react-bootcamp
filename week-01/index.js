const e = React.createElement;

const h1Title = e("h1", {},
	e("a", { href: "index.html"}, "React Bootcamp")
)

const mainHeading = e("h3", {}, "Home")

const pOne = e("p", {}, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")

const pTwo = e("p", {}, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.")

const footerContent = e("p", {}, "2020 React Bootcamp. Bharath")

function Header() {
	return (
		e("header", {className: "site-header" },
			h1Title
		)
	)
}

function Main() {
	return (
		e("main", { className: "main-content" },
			mainHeading,
			pOne,
			pTwo
		)
	)
}

function Footer() {
	return (
		e("footer", { className: "site-footer" },
			footerContent
		)
	)
}

function App() {
	return (
		e(React.Fragment, {},
			Header(),
			Main(),
			Footer()
		)
	)
}

ReactDOM.render (
	App(),
	document.getElementById('site-container')
);