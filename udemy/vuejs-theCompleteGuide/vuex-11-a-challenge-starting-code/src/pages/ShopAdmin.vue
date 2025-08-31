<template>
  <div>
    <section>
      <h2>Shop Admin</h2>
      <p>There isn't much to do at the moment - sorry ...</p>
    </section>
    <section>
      <h2>Text</h2>
      <div>
        <p class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat tempora. Quaerat nobis modi repellendus voluptates asperiores, eligendi aperiam, iusto inventore labore obcaecati atque voluptas mollitia, eius sapiente dolores? Unde neque possimus maiores quam ducimus soluta tempore saepe quis, commodi sed rerum dicta amet numquam officia fuga, ipsa consequatur accusamus voluptate ex ea. Veritatis laboriosam, consectetur voluptatibus autem excepturi odit, minus voluptatem alias dolore inventore perspiciatis iste commodi in? Numquam earum minima officiis aliquam reiciendis, obcaecati tenetur exercitationem, quam odio, veniam unde. Nesciunt accusantium adipisci temporibus modi facilis at ex sit cupiditate ipsam ullam, nostrum id quam placeat minima rerum.</p>
        <button type="button" class="see-more-btn">see more</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  text-align: center;
  margin: 3rem auto;
  max-width: 40rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 2rem;
}

.review-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.see-more-btn {
  position: absolute;
  inset-inline-end: 0;
  inset-block-end: 0;
  background: linear-gradient(to right, transparent, var(--color-card) 60%);
}
</style>