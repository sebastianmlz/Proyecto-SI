<script>

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<header class="header">
	<div class="header__div">
		<ul>
			<li><div class="imagen"><img src="/escudo.png"></div></li>
		</ul>
		<ul>
			<li class="header__item">Acerca de nosotros</li>
			<li class="header__item">Contactanos</li>
			<li class="header__item">Ingresar</li>
			
		</ul>
	</div>
	
</header>

<main>
	
</main>

<style>

	.header {
		
		background-color: #48e;
		color: #efefef;
		margin: 0;

	}

	.header__div {
		width: 100%;
		height: 5rem;
		display: flex;
		list-style-type: none;
		justify-content:space-between;
		align-items: center;
	}

	.imagen {
		display: flex;
		justify-content: left;
		margin-left: 15px;
	}

	.header__div ul {
		display: flex;
		list-style-type: none;
		justify-content:space-between;
		align-items: center;
	}

	.header__item {
		padding: 15px;
		border: 2px solid #efefef;
		border-radius: 15px;
		gap: 20px;
		margin: 5px 20px;
		transition: color 0.3s ease, background-color 0.3s ease; 
	}

	.header__div img {
		width: 4rem; 
		height: 3.5rem; 
		padding-left: 10px;
		display: block;
	}

	.header__item:hover {
		background-color: #efefef;
		color: #48e;
	}

</style>
