<script>
	// Props: texto del ítem y clases adicionales opcionales
	export let texto;
	export let masClases = '';
</script>

<div class={` border-none m-20 mb-0 mt-10 flex items-center justify-center rounded-3xl hover:opacity-80 ${masClases}`}>
	{texto}
</div>

<style>
    div{
        width: 20rem;
        height: 15rem;
        background-color: #fff;
        color: #000;
        font-size: 50px;
        text-align: center;
    }

    @media (max-width: 900px) {
        div {
            width: 20rem;
        height: 15rem;
        }
    }
</style>

