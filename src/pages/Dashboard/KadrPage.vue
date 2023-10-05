<template>
  <div class="azolikCategoryCard">
    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Ishga kelganlar'"
        :man="'250'"
        :dataCenter="'400'"
        :woman="'150'"
        :variant="'green'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'orange'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'dark-yellow'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'danger'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'pink'"
      />
    </div>

    <div>
      <AzolikCategoryCard
        :title="'Umumiy hodimlar'"
        :man="'350'"
        :dataCenter="'500'"
        :woman="'150'"
        :variant="'green'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.azolikCategoryCard {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
 
  @include breakpoint('md') {
  grid-template-columns: repeat(3, 1fr);
  }

  @include breakpoint('lg') {
  grid-template-columns: repeat(7, 1fr);
  }
}
</style>
