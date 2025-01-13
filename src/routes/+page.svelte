<script>
	import * as Tabs from "$lib/components/ui/tabs";
	import ProductCard from "../components/ProductCard.svelte";

</script>

<div class="wmc-layout min-h-desktop">
  <section class="mt-5 w-fit mx-auto text-center mb-24">
    <h1 class="text-4xl md:text-5xl font-bold mb-2">Welcome to Work Meet Coffee</h1>
    <p>A platform to find recommended and favourite coffee shop in town by <span class="font-bold">Netizen!</span></p>
  </section>
  <section class="mb-24">
    <h3 class="text-lg font-semibold text-center mb-2">Here are most loved place</h3>
    <div class="flex flex-row gap-3 w-full lg:w-[64rem] overflow-x-auto no-scrollbar">
      <ProductCard href="xx" data={{name: "Lucky cat"}}/>
      <ProductCard href="xx" data={{name: "Lucky cat"}}/>
      <ProductCard href="xx" data={{name: "Lucky cat"}}/>
      <ProductCard href="xx" data={{name: "Lucky cat"}}/>
    </div>
  </section>
  <section>
    <p class="text-lg font-semibold text-center mb-2">Selected by city</p>
    <Tabs.Root value="jakarta" class="w-full">
      <Tabs.List class="grid w-full grid-cols-3">
        <Tabs.Trigger value="jakarta">Jakarta</Tabs.Trigger>
        <Tabs.Trigger value="bandung">Bandung</Tabs.Trigger>
        <Tabs.Trigger value="yogyakarta">Yogyakarta</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="jakarta">
        <div class="grid grid-cols-auto-fill gap-3 w-full lg:w-[64rem]">
          <ProductCard href="xx" data={{name: "Lucky cat"}}/>
          <ProductCard href="xx" data={{name: "Lucky cat 2"}}/>
          <ProductCard href="xx" data={{name: "Lucky cat 3"}}/>
        </div>
      </Tabs.Content>
      <Tabs.Content value="bandung">
        <div class="grid grid-cols-auto-fill gap-3 w-full lg:w-[64rem] overflow-x-auto">
          <ProductCard href="xx" data={{name: "Upnormal coffee roaster"}}/>
          <ProductCard href="xx" data={{name: "Ruang Duduk Coffee and Eatery"}}/>
        </div>
      </Tabs.Content>
      <Tabs.Content value="yogyakarta">
        <div class="grid grid-cols-auto-fill gap-3 w-full lg:w-[64rem] overflow-x-auto">
          <ProductCard href="xx" data={{name: "Estuary Coffee"}}/>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  </section>
</div>
