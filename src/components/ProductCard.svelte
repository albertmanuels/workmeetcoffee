<script lang="ts">
  const {href, data} = $props()
  const {name} = data
</script>

<a {href} aria-label="Product link" class="flex-1">
  <div class="min-w-[320px] h-44 p-2 flex flex-col border rounded-lg bg-base2 ">
    <h3 class="text-lg font-semibold">{name}</h3>
    <div>
      
    </div>
  </div>
</a>