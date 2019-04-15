<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer" 
    width="210px"
    fixed app>
        <v-layout align-center
          justify-center
          wrap>
          
            <v-img 
            src="http://www.mandomedio.com/web/wp-content/uploads/Logo-MM-2017-08-1.png" 
            height="40"
            
            contain
            background-position: center
            >
              
            </v-img>

        </v-layout>
        
          <v-layout align-center
          justify-center
          wrap>
              <v-avatar size="50%" >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                  >
              </v-avatar>
          </v-layout>
          <v-layout align-center
          justify-center
          wrap>
            <v-card-title primary-title >
              <div class="title font-weight-bold">
                Marcelo Scott A.
              </div>    
            </v-card-title>
            <v-flex xs12 align="center">
              <div class="body-1 font-weight-medium text-xs-center">
                Gerente operaciones<br>11.665.946-K
              </div> 
            </v-flex>
          </v-layout>
        
      <v-list dense>
        <template v-for="(item, i) in listado">
          
          <v-layout
            v-if="item.heading"
            :key="i"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-3"
          ></v-divider>
          <v-list-tile
            v-else
            :key="i"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

          <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>chevron_right</v-icon>
          </template>
        </v-breadcrumbs>

    
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12>   
              <div class="mmtitle">
                <v-icon color="orange darken-2">adjust</v-icon>
                Evaluaciones
              </div> 
          </v-flex>

        </v-layout>
        <v-spacer></v-spacer>
        <v-layout>
          <v-flex xs12>   
            <v-tabs 
            color="transparent"
            slider-color="orange"
            >
              <v-tab href="#tab-1">
                Personales
              </v-tab>
              <v-tab href="#tab-2">
                Mi equipo
              </v-tab>
              <v-tab href="#tab-3">
                Equipo indirecto
              </v-tab>
              <v-tab href="#tab-4">
                Dashboard
              </v-tab>
              <v-tabs-items v-model="model">
                <v-tab-item
                  :value="`tab-1`">
                  <v-card flat>
                    <v-data-table
                      :headers="headers"
                      :items="desserts"
                      :search="search"
                      hide-actions
                      :pagination.sync="pagination"
                      class="mmtable"

                    >
                      <template v-slot:items="props">
                        <td>
                          <v-icon
                            color="green"
                            small
                            v-if="props.item.estado == 'Completada'">
                              lens
                            </v-icon>
                            <v-icon
                            color="yellow"
                            small
                            v-else-if="props.item.estado == 'En proceso'">
                              lens
                            </v-icon>
                            <v-icon
                            color="red"
                            small
                            v-else-if="props.item.estado == 'Inactiva'">
                              lens
                            </v-icon>
                          {{ props.item.estado }}
                        </td>
                        <td class="text-xs-left">{{ props.item.fechaIn }}</td>
                        <td class="text-xs-left">{{ props.item.fechaTe }}</td>
                        <td class="">
                          <v-btn v-if="props.item.estado == 'Completada'" 
                            round 
                            class="green--text"
                            color="green lighten-4" 
                            dark
                            block
                            small
                            depressed
                            >
                              Ver detalle
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'En proceso'" 
                            round 
                            class="orange--text"
                            color="yellow lighten-4" 
                            dark
                            block 
                            small
                            depressed>
                              Continuar
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'Inactiva'" 
                            round 
                            class="red--text"
                            color="red lighten-4" 
                            dark
                            block
                            small
                            depressed>
                              Iniciar
                          </v-btn>
                        </td>
                      </template>
                    </v-data-table>
                    <div class="text-xs-center pt-2">
                      <v-pagination 
                      v-model="pagination.page" 
                      :length="pages"
                      circle
                      color="orange"
                      >
                      
                      </v-pagination>
                    </div>
                  </v-card>
                </v-tab-item>

                <v-tab-item
                  :value="`tab-2`">
                  <v-card flat>
                    <v-data-table
                      :headers="headers2"
                      :items="desserts2"
                      :search="search"
                      hide-actions
                      :pagination.sync="pagination"
                      class="elevation-1 mmtable"
                    >
                      <template v-slot:items="props">
                        <td>
                          
                            <v-icon
                            color="green"
                            small
                            v-if="props.item.estado == 'Completada'">
                              lens
                            </v-icon>
                            <v-icon
                            color="yellow"
                            small
                            v-else-if="props.item.estado == 'En proceso'">
                              lens
                            </v-icon>
                            <v-icon
                            color="red"
                            small
                            v-else-if="props.item.estado == 'Inactiva'">
                              lens
                            </v-icon>
                          
                          {{ props.item.estado }}
                        </td>
                        <td class="text-xs-left">{{ props.item.usuario }}</td>
                        <td class="text-xs-left">{{ props.item.notaFin }}</td>
                        <td class="text-xs-left">{{ props.item.notaCom }}</td>
                        <td class="text-xs-left">{{ props.item.notaObj }}</td>

                        <td class="text-xs-left">
                          <v-btn 
                            v-if="props.item.feedb == 'true'" 
                            flat 
                            icon 
                            color="grey"
                            @click.stop="dialog = true">

                            <v-icon>
                              sms
                            </v-icon>

                          </v-btn>
                          <v-btn 
                            v-if="props.item.feedb == 'false'" 
                            flat 
                            disabled 
                            icon 
                            color="grey"
                            >
                            
                            <v-icon>
                              more_horiz
                            </v-icon>

                          </v-btn>
                        </td>

                        <td class="">
                          <v-btn v-if="props.item.estado == 'Completada'" 
                            round 
                            class="green--text"
                            color="green lighten-4" 
                            dark
                            block
                            small
                            depressed
                            >
                              Ver detalle
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'En proceso'" 
                            round 
                            class="orange--text"
                            color="yellow lighten-4" 
                            dark
                            block 
                            small
                            depressed>
                              Continuar
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'Inactiva'" 
                            round 
                            class="red--text"
                            color="red lighten-4" 
                            dark
                            block
                            small
                            depressed>
                              Iniciar
                          </v-btn>
                        </td>

                      </template>
                    </v-data-table>
                    <div class="text-xs-center pt-2">
                      <v-pagination 
                      v-model="pagination.page" 
                      :length="pages2"
                      circle
                      color="orange"
                      >                      
                      </v-pagination>

                      <v-dialog
                        v-model="dialog"
                        max-width="649"
                      >
                        <v-card>
                          <v-card-title primary-title>
                            <v-layout row wrap>
                              <v-flex xs1>
                                <v-avatar width="50px" height="50px" >
                                  <img
                                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                                  alt="John"
                                  >
                                </v-avatar>
                              </v-flex>
                              <v-flex xs1>
                                
                              </v-flex>
                            </v-layout>
                          </v-card-title>
                          <v-card-text>
                            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-card>
                </v-tab-item>

                <v-tab-item
                  :value="`tab-3`">
                  <v-card flat>
                    <div class="body-1 font-weight-thin xs-2">
                      Reporte directo del equipo de:
                    </div>
                    <v-form v-model="valid">
                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4>
                            <v-select
                              :items="items"
                              label="Seleccionar lider"
                              outline
                            ></v-select>
                          </v-flex>

                          <v-flex
                            xs12
                            md4>
                            <v-text-field
                              outline
                              label="Buscar"
                              prepend-inner-icon="search"
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </v-card>
                  <v-card flat>
                    <v-data-table
                      :headers="headers2"
                      :items="desserts2"
                      :search="search"
                      hide-actions
                      :pagination.sync="pagination"
                      class="elevation-1 mmtable">
                      <template v-slot:items="props">
                        <td>
                          
                            <v-icon
                            color="green"
                            small
                            v-if="props.item.estado == 'Completada'">
                              lens
                            </v-icon>
                            <v-icon
                            color="yellow"
                            small
                            v-else-if="props.item.estado == 'En proceso'">
                              lens
                            </v-icon>
                            <v-icon
                            color="red"
                            small
                            v-else-if="props.item.estado == 'Inactiva'">
                              lens
                            </v-icon>
                          
                          {{ props.item.estado }}
                        </td>
                        <td class="text-xs-left">{{ props.item.usuario }}</td>
                        <td class="text-xs-left">{{ props.item.notaFin }}</td>
                        <td class="text-xs-left">{{ props.item.notaCom }}</td>
                        <td class="text-xs-left">{{ props.item.notaObj }}</td>
                        <td class="text-xs-left">
                          <v-btn 
                            v-if="props.item.feedb == 'true'" 
                            flat 
                            icon 
                            color="grey"
                            @click.stop="dialog = true">

                            <v-icon>
                              sms
                            </v-icon>

                          </v-btn>
                          <v-btn 
                            v-if="props.item.feedb == 'false'" 
                            flat 
                            disabled 
                            icon 
                            color="grey"
                            >
                            
                            <v-icon>
                              more_horiz
                            </v-icon>

                          </v-btn>
                        </td>

                        <td class="">
                          <v-btn v-if="props.item.estado == 'Completada'" 
                            round 
                            class="green--text"
                            color="green lighten-4" 
                            dark
                            block
                            small
                            depressed
                            >
                              Ver detalle
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'En proceso'" 
                            round 
                            class="orange--text"
                            color="yellow lighten-4" 
                            dark
                            block 
                            small
                            depressed>
                              Continuar
                          </v-btn>
                          <v-btn v-else-if="props.item.estado == 'Inactiva'" 
                            round 
                            class="red--text"
                            color="red lighten-4" 
                            dark
                            block
                            small
                            depressed>
                              Iniciar
                          </v-btn>
                        </td>
                      </template>
                    </v-data-table>
                    <div class="text-xs-center pt-2">
                      <v-pagination 
                      v-model="pagination.page" 
                      :length="pages2"
                      circle
                      color="orange"
                      >
                      
                      </v-pagination>
                    </div>
                  </v-card>
                </v-tab-item>

                <v-tab-item
                  :value="`tab-4`">
                  <v-card flat>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-card color="white" dark>
                            <v-card-title primary class="title">
                              <v-card-text>
                                <div class="subheading black--text font-weight-regular xs-2">
                                  <v-icon color="orange">equalizer</v-icon>
                                  Resultados por persona
                                </div>
                              </v-card-text>
                              <v-card-text>
                                <div class="body-1 black--text font-weight-thin xs-12">
                                  Seleccionar jefatura:
                                
                                  <v-flex xs7 md7>
                                    <v-form>
                                      <v-container>
                                        <v-layout>
                                          <v-select
                                            :items="items"
                                            label="Seleccionar lider"
                                            outline
                                            color="black"
                                            background-color="black"
                                          ></v-select>
                                        </v-layout>
                                      </v-container>
                                    </v-form>    
                                  </v-flex>
                                  <v-flex xs5 md5>    
                                  </v-flex>
                                </div>
                                <div class="body-1 black--text font-weight-thin xs-2">

                                  <v-data-table
                                    :items="desserts"
                                    class="elevation-1"
                                    hide-actions
                                    hide-headers
                                    light
                                  >
                                    <template v-slot:items="props">
                                      <td>{{ props.item.name }}</td>
                                      <td class="text-xs-right">{{ props.item.calories }}</td>
                                      <td class="text-xs-right">{{ props.item.fat }}</td>
                                      <td class="text-xs-right">{{ props.item.carbs }}</td>
                                      <td class="text-xs-right">{{ props.item.protein }}</td>
                                      <td class="text-xs-right">{{ props.item.iron }}</td>
                                    </template>
                                  </v-data-table>
                                  <v-list-tile
                                    v-for="item in itm"
                                    :key="item.title"
                                    avatar>
                                    <v-list-tile-avatar>
                                      <img :src="item.avatar">
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                      <v-list-tile-sub-title v-html="item.rut"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-content>
                                      <v-progress-linear color="cyan" v-model="item.valueDeterminate"></v-progress-linear>
                                    </v-list-tile-content>
                                  </v-list-tile>
                                
                                </div>
                              </v-card-text>
                            </v-card-title>
                            <v-card-text></v-card-text>
                          </v-card>
                        </v-flex>
                        <v-flex d-flex xs12 sm6 md6>
                          <v-layout row wrap>
                            <v-flex d-flex>
                              <v-layout row wrap>
                                <v-flex
                                  d-flex
                                  xs12
                                >
                                  <v-card
                                    color="white"
                                    dark
                                  >
                                  </v-card>
                                </v-flex>
                                <v-flex
                                  d-flex
                                  xs12
                                >
                                  <v-card
                                    color="white"
                                    dark
                                  >
                                    <v-card-text></v-card-text>
                                  </v-card>
                                </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-tab-item>

              </v-tabs-items>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        drawer: null,
        itm: [
          
          { active: true, title: 'Jason Oner', rut:'<span class=text--primary>11.111.111-1</span>', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          valueDeterminate: 50 },
          
          { active: true, title: 'Ranee Carlson', rut:'11.111.111-2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          valueDeterminate: 65 },
          
          { title: 'Cindy Baker', rut:'11.111.111-3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          valueDeterminate: 40 },
          
          { title: 'Ali Connors', rut:'11.111.111-4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          valueDeterminate: 20 }
        ],
        
        items: [
          {
            text: 'Home',
            disabled: true,
            href: 'breadcrumbs_dashboard'
          },
          {
            text: 'Procesos',
            disabled: true,
            href: 'breadcrumbs_link_1'
          },
          {
            text: 'Evaluaciones',
            disabled: true,
            href: 'breadcrumbs_link_2'
          }
        ],
        listado: [
          { divider: true },
          { icon: 'home', text: 'Home' },  
          { icon: 'assignment', text: 'Encuestas' },
          { icon: 'adjust', text: 'Evaluaciones' },
        ],
        pes: [
          'Personales', 
          'Mi equipo', 
          'Equipo indirecto', 
          'Dashboard',
        ],
        text: 'pedazo de putanga',
        search: '',
        pagination: {},
        selected: [],

        headers: [
          {
            text: 'Estado',
            align: 'left',
            sortable: false,
            value: 'estado'
          },
          { text: 'fecha de inicio', value: 'fechaIn' },
          { text: 'Fecha de termino', value: 'fechatE' },
          { text: 'Accion', value: 'detail' }
        ],
        desserts: [
          {
            estado: 'Completada',
            fechaIn: '04 de Octubre 2019, 03:00 hrs',
            fechaTe: '04 de Octubre 2019, 03:00 hrs',
            detail: 'Ver detalle',
          },
          {
            estado: 'En proceso',
            fechaIn: '04 de Octubre 2019, 03:00 hrs',
            fechaTe: '04 de Octubre 2019, 03:00 hrs',
            detail: 'Ver detalle',
          },
          {
            estado: 'En proceso',
            fechaIn: '04 de Octubre 2019, 03:00 hrs',
            fechaTe: '04 de Octubre 2019, 03:00 hrs',
            detail: 'Ver detalle',
          },
          {
            estado: 'Inactiva',
            fechaIn: '04 de Octubre 2019, 03:00 hrs',
            fechaTe: '04 de Octubre 2019, 03:00 hrs',
            detail: 'Ver detalle',
          }
        ],

        headers2: [
          {
            text: 'Estado',
            align: 'left',
            sortable: false,
            value: 'estado'
          },
          { text: 'Usuario', value: 'usuario' },
          { text: 'Nota final', value: 'notaFin' },
          { text: 'Nota competencias', value: 'notaCom' },
          { text: 'Nota objetivos', value: 'notaObj' },
          { text: 'Feedback', value: 'feedb' },
          { text: 'Accion', value: 'acc' }
        ],
        desserts2: [
          {
            estado: 'En proceso',
            usuario: 'User',
            notaFin: '60.0%',
            notaCom: '60.0%',
            notaObj: '60.0%',
            feedb: 'true',
            acc: 'Ver detalle',
          },
          {
            estado: 'Completada',
            usuario: 'User',
            notaFin: '56.0%',
            notaCom: '56.0%',
            notaObj: '56.0%',
            feedb: 'false',
            acc: 'Continuar',
          },
          {
            estado: 'En proceso',
            usuario: 'User',
            notaFin: '76.0%',
            notaCom: '76.0%',
            notaObj: '76.0%',
            feedb: 'false',
            acc: 'Continuar',
          },
          {
            estado: 'Inactiva',
            usuario: 'User',
            notaFin: '40.0%',
            notaCom: '40.0%',
            notaObj: '40.0%',
            feedb: 'true',
            acc: 'Iniciar',
          }
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      },
      pages2 () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>


<style lang="css" scoped>

  .mmtable .v-table tbody tr :not(:last-child) {
    border-bottom: none;
  }

  table.v-table thead tr th.column.text-xs-left {
    background-color: #fafafa;
  }

  .mmtable .v-table tbody tr td{
    padding: 28px 24px;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #778b97;
  }

  button.green--text {
    width: 158px;
    height: 40px;
    border-radius: 20px;
    background-color: #e3f6ed;
  }

  button.orange--text {
    width: 158px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff9eb;
  }

  button.red--text {
    width: 158px;
    height: 40px;
    border-radius: 20px;
    background-color: #fef6f6;
  }

  .mmtitle {
    height: 38px;
    font-family: Nunito Sans;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #333333;
    margin-bottom: 40px;

  }

  .v-breadcrumbs {
    margin-left: 17%;
  }


  


</style>

}
