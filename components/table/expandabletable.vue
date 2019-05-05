<template>
  <section>
    <b-collapse class="card round7" aria-id="contentIdForA11y3">
        
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">Detail Expandable Table
            
        </p>
        
            <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
            </a>
      </div>
      <div class="card-content">
        <div class="">
          <b-table
            :data="data"
            ref="table"
            paginated
            per-page="5"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            @details-open="(row, index) => $toast.open(`Expanded ${row.first_name}`)"
            :show-detail-icon="showDetailIcon"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
          >
            <template slot-scope="props">
              <b-table-column field="id" label="ID" width="40" numeric>{{ props.row.id }}</b-table-column>

              <b-table-column field="first_name" label="First Name" sortable>
                <template v-if="showDetailIcon">{{ props.row.first_name }}</template>
                <template v-else>
                  <a @click="toggle(props.row)">{{ props.row.first_name }}</a>
                </template>
              </b-table-column>

              <b-table-column
                field="last_name"
                label="Last Name"
                sortable
              >{{ props.row.last_name }}</b-table-column>

              <b-table-column field="date" label="Date" sortable centered>
                <span class="tag is-success">{{ new Date(props.row.date).toLocaleDateString() }}</span>
              </b-table-column>

              <b-table-column label="Gender">
                <b-icon pack="fa" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'"></b-icon>
                {{ props.row.gender }}
              </b-table-column>
            </template>

            <template slot="detail" slot-scope="props">
              <article class="media">
                <figure class="media-left">
                  <p class="image is-64x64">
                    <img src="/static/img/placeholder-128x128.png">
                  </p>
                </figure>
                <div class="media-content">
                  <div class="content">
                    <p>
                      <strong>{{ props.row.first_name }} {{ props.row.last_name }}</strong>
                      <small>@{{ props.row.first_name }}</small>
                      <small>31m</small>
                      <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                      Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                  </div>
                </div>
              </article>
            </template>
          </b-table>
        </div>
      </div>
      
    </b-collapse>
  </section>
</template>

<script>
import { dummydata } from "../../assect/dummydata.js";

const data = dummydata;
console.log("herer uis data", data);

export default {
  data() {
    return {
      data,
      defaultOpenedDetails: [1],
      showDetailIcon: true
    };
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    }
  }
};
</script>