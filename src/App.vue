<template>
  <v-app id="inspire">
    <v-layout row justify-center>
      <v-dialog v-model="dialog2" max-width="500px"
        transition="dialog-bottom-transition" light>
        <v-card>
          <v-card-title>
            Feedback
          </v-card-title>
          <v-card-text>
           
           <v-textarea
          outline
          name="input-7-4"
          label="Comentario"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog3" max-width="500px"
        transition="dialog-bottom-transition" light>
        <v-card>
          <v-card-title>
            Crear nueva accion
          </v-card-title>
          <v-card-text>
           
           <v-textarea
            outline
            name="input-7-4"
            label="Accion"
            value="Esta será una accion medible"
          ></v-textarea>

          <v-layout row>
            <v-flex xs4>
              <v-subheader>Compromiso</v-subheader>
            </v-flex>
            <v-flex xs8>
              <v-text-field
                label="Cantidad"
                value="10"
                suffix="veces"
              ></v-text-field>
            </v-flex>
    </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="dialog3=false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>

    <v-navigation-drawer v-model="drawer" class="mmsidebar" app floating>
        <v-layout align-center justify-center wrap>
          <v-img src="http://www.mandomedio.com/web/wp-content/uploads/Logo-MM-2017-08-1.png" 
          height="40"
          contain
          background-position: center
          >    
          </v-img>

        </v-layout>
        
          <v-layout align-center
          justify-center
          wrap>
              <v-avatar size="70%" class=mmavatar >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"
                  >
              </v-avatar>
          </v-layout>
          <v-layout align-center
          justify-center
          wrap>
            <v-card-title primary-title >
              <div class="title mmname">
                Marcelo Scott A.
              </div>    
            </v-card-title>
            <v-flex xs12 align="center">
              <div class="mmcargo font-weight-medium text-xs-center">
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
              <v-list-tile-title :class="item.class">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
          <breadcumb></breadcumb>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12>   
              <div class="mmtitle">
                <v-icon color="orange darken-2 mmicontitle">adjust</v-icon>
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
              <v-tab href="#tab-1" 
            class="mmtabs-padding">
                Personales
              </v-tab>
              <v-tab href="#tab-2" class="mmtabs-padding">
                Mi equipo
              </v-tab>
              <v-tab href="#tab-3" class="mmtabs-padding">
                Equipo indirecto
              </v-tab>
              <v-tab href="#tab-4" class="mmtabs-padding">
                Dashboard
              </v-tab>
              <v-tab href="#tab-5" class="mmtabs-padding">
                Ver detalle
              </v-tab>
              <v-tabs-items v-model="model">
                <v-tab-item
                  :value="`tab-1`" class="mmtabs-padding" >
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
                  :value="`tab-2`" class="mmtabs-padding" >
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
                        <td class="text-md-left">
                          <v-avatar>
                            <img :src="props.item.usuario.avatar" class="mmmargin50">
                          </v-avatar>
                          &nbsp;
                          <strong >{{ props.item.usuario.name }} </strong>
                          <div class="text-lg-right">{{ props.item.usuario.rut }}</div>
                        </td>
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
                          <v-toolbar dark color="white">
                            <v-spacer></v-spacer>
                            <v-btn icon dark @click="dialog = false">
                              <v-icon color="black" left>close</v-icon>
                            </v-btn>
                          </v-toolbar>
                          <v-card-title primary-title>
                          </v-card-title>
                          <v-card-text>

                            <v-data-table
                              :items="feeds"                        
                              hide-actions
                              hide-headers
                              light
                              >
                              <template v-slot:items="props">

                                <td style="width:50px" rowspan="">
                                  <v-list-tile-avatar>
                                    <img :src="props.item.avatar">
                                  </v-list-tile-avatar>
                                </td>
                                <td>
                                  <p margin="2em 4em">{{ props.item.name }} <br> 
                                  {{ props.item.date }} </p>
                                  <p margin="2em 4em">{{ props.item.descrip }}</p>
                                </td>
                              </template> 
                            </v-data-table>

                          </v-card-text>

                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              flat
                              round
                              color="orange"
                              background-color="orange"
                              @click="dialog = false"
                            >
                              Ir a evaluacion
                            </v-btn>

                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </v-card>
                </v-tab-item>

                <v-tab-item
                  :value="`tab-3`" class="mmtabs-padding" >
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
                              content-class="menu__content--select"
                              offset-y
                              solo
                            ></v-select>
                          </v-flex>

                          <v-flex
                            xs12
                            md4>
                            <v-text-field
                              
                              solo
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
                        <td class="text-md-left">
                          <v-avatar>
                            <img :src="props.item.usuario.avatar" class="mmmargin50">
                          </v-avatar>
                          &nbsp;
                          <strong >{{ props.item.usuario.name }} </strong>
                          <div class="text-lg-right">{{ props.item.usuario.rut }}</div>
                        </td>
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
                  :value="`tab-4`" class="mmtabs-padding" >
                  <v-card flat>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <!-- Resultados por persona -->
                        <v-flex d-flex xs12 sm6 md6>
                          <v-card color="white" >
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
                                            solo
                                          ></v-select>
                                        </v-layout>
                                      </v-container>
                                    </v-form>    
                                  </v-flex>
                                  <v-flex xs5 md5>    
                                  </v-flex>
                                </div>
                                
                                <v-list two-line>
                                  <template v-for="(item) in itm">
                                    <v-list-tile
                                      :key="item.name"
                                      avatar>
                                      <v-list-tile-avatar>
                                        <img :src="item.avatar">
                                      </v-list-tile-avatar>
                                      <v-list-tile-content>
                                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.rut"></v-list-tile-sub-title>
                                      </v-list-tile-content>

                                       <v-list-tile-content>
                                          <v-progress-linear color="#2cd9c5" v-model="item.valueDeterminate">
                                      </v-progress-linear>
                                        </v-list-tile-content>
                                    </v-list-tile>
                                  </template>
                                </v-list>
                              </v-card-text>
                            </v-card-title>

                            <v-card-text></v-card-text>
                          </v-card>
                        </v-flex>

                        <v-flex d-flex xs12 sm6 md6>
                          <v-layout row wrap>
                            <v-flex d-flex>
                              <v-layout row wrap>

                                <!-- Resultados personales -->
                                <v-flex d-flex xs12>
                                  <v-card
                                    color="white"
                                    >
                                    <v-card-title primary class="title">
                                      <v-card-text>
                                        <div class="subheading black--text font-weight-regular xs-2">
                                          <v-icon color="orange">equalizer</v-icon>
                                          Evaluaciones contestadas
                                        </div>
                                      </v-card-text>
                                      <v-card-text>

                                        <v-list two-line>
                                          <template v-for="(item) in comp">
                                            <v-list-tile
                                              :key="item.titulo"
                                              avatar>
                                              <v-list-tile-content>
                                                <v-list-tile-title v-html="item.titulo"></v-list-tile-title>
                                              </v-list-tile-content>
                                               <v-list-tile-content>
                                                  <v-progress-linear color="#2cd9c5" v-model="item.porcent">
                                              </v-progress-linear>
                                                </v-list-tile-content>
                                            </v-list-tile>
                                          </template>
                                        </v-list>

                                       
                                      </v-card-text>
                                    </v-card-title>
                                  </v-card>
                                </v-flex>
                                <!-- Resultados por competencia -->
                                <v-flex
                                  d-flex
                                  xs12
                                >
                                  <v-card
                                    color="white"
                                    dark
                                  >
                                    <v-card-title primary class="title">
                                      <v-card-text>
                                        <div class="subheading black--text font-weight-regular xs-2">
                                          <v-icon color="orange">equalizer</v-icon>
                                          Resultados por competencia
                                        </div>
                                      </v-card-text>
                                      <v-card-text>
                                        <v-flex xs11>
                                          <div class="small">
                                            <!--<bar-chart :chart-data="datacollection"></bar-chart>-->
                                            <bar-chart></bar-chart>
                                          </div>     
                                        </v-flex>
                                      </v-card-text>
                                    </v-card-title>
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

                <v-tab-item
                  :value="`tab-5`" class="mmtabs-padding" >
                  <div class="subheading black--text font-weight-regular xs-2">
                      <v-icon color="orange">adjust</v-icon>
                      Resultados de evaluacion
                  </div>
                  <v-card flat>
                    <v-container fluid grid-list-md>
                      <v-layout row wrap>
                        <!-- Resultados por persona -->

                        <v-flex d-flex xs12 sm6 md6 light>
                          <v-layout row wrap>
                            <v-flex d-flex>
                              <v-layout row wrap>
                                <v-flex xs12>
                                <v-card color="white">
                                  <v-layout>
                                    <v-flex xs2 class="mmmargin5">
                                      <v-avatar
                                        size="100px">
                                        <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" alt="alt">
                                      </v-avatar>
                                    </v-flex>
                                    <v-flex xs10>
                                      <v-card-title primary-title>
                                        <div>
                                          <div class="title mmcolaborator-name">Jaime Sanz</div>
                                          <div class="mmcolaborator-position">Chief Technology Officer</div>
                                          <div class="mmcolaborator-position">16.796.331-5</div>
                                          <div class="mmcolaborator-position">Gerencia IT</div>
                                          <div class="mmcolaborator-position"><strong>Evaluador: Marcelo Scott</strong></div>
                                        </div>
                                      </v-card-title>
                                    </v-flex>
                                  </v-layout>
                                  <v-divider light></v-divider>

                                  <v-layout>
                                    <v-flex xs4 class="mmmargin5">
                                      <v-progress-circular
                                        :rotate="270"
                                        :size="120"
                                        :width="12"
                                        :value="68"
                                        color="#ee8147"
                                        >
                                        <span class="text-xs-center mminside-graph">Objetivos 68 </span>
                                      </v-progress-circular>
                                    </v-flex>

                                    <v-flex xs4 class="mmmargin5">
                                      <v-progress-circular
                                        :rotate="270"
                                        :size="120"
                                        :width="12"
                                        :value="87"
                                        color="#ffe700"
                                        >
                                        <span class="text-xs-center mminside-graph">Competencia 87 </span>
                                      </v-progress-circular>
                                    </v-flex>

                                    <v-flex xs4 class="mmmargin5">
                                      <v-progress-circular
                                        :rotate="270"
                                        :size="120"
                                        :width="12"
                                        :value="82"
                                        color="#2cd9c5"
                                        >
                                        <span class="text-xs-center mminside-graph">Nota final 82</span>
                                      </v-progress-circular>
                                    </v-flex>
                                   
                                  </v-layout>
                                  <v-divider light></v-divider>
                                </v-card>
                              </v-flex>

                              <v-flex xs12 >
                                <v-card>
                                  <v-toolbar color="white" flat>
                                    <v-toolbar-side-icon>
                                      <v-icon color="orange">sms</v-icon>
                                    </v-toolbar-side-icon>

                                    <v-toolbar-title>Feedback</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                    <v-btn fab dark small color="orange">
                                      <v-icon dark @click="dialog2 = true">add</v-icon>
                                    </v-btn>
                                  </v-toolbar>

                                  <v-list three-line>
                                    <template v-for="(item, index) in feeds">
                                      <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                      >
                                        {{ item.header }}
                                      </v-subheader>

                                      <v-divider
                                        v-else-if="item.divider"
                                        :key="index"
                                        :inset="item.inset"
                                      ></v-divider>

                                      <v-list-tile
                                        v-else
                                        :key="item.title"
                                        avatar
                                        @click=""
                                      >
                                        <v-list-tile-avatar>
                                          <img :src="item.avatar">
                                        </v-list-tile-avatar>

                                        <v-list-tile-content>
                                          <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                          <v-list-tile-sub-title v-html="item.descrip"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                      </v-list-tile>
                                    </template>
                                  </v-list>
                                </v-card>
                              </v-flex>
                              
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-flex>

                        <v-flex d-flex xs12 sm6 md6>
                          <v-layout row wrap>
                            <v-flex d-flex>
                              <v-layout row wrap>

                                <!-- Resultados personales -->
                                <v-flex xs12>
                                  <v-card
                                    color="white"
                                    dark>
                                    <v-card-title primary class="title">
                                      <v-card-text>
                                        <div class="subheading black--text font-weight-regular xs-2">
                                          <v-icon color="orange">equalizer</v-icon>
                                          Competencias
                                        </div>
                                      </v-card-text>
                                      <v-card-text>
                                        <v-flex xs11>
                                          
                                          <div class="small">
                                            <!--<line-chart :chart-data="datacollection"></line-chart>-->
                                            <area-chart></area-chart>
                                          </div> 
                                          
                                          
                                        </v-flex>
                                      </v-card-text>
                                    </v-card-title>
                                  </v-card>
                                </v-flex>
                                <!-- Resultados por competencia -->
                                <v-flex xs12 >
                                <v-card>
                                  <v-toolbar color="white" flat>
                                    <v-toolbar-side-icon>
                                      <v-icon color="orange">sms</v-icon>
                                    </v-toolbar-side-icon>

                                    <v-toolbar-title>Acciones</v-toolbar-title>

                                    <v-spacer></v-spacer>

                                    <v-btn fab dark small color="orange">
                                      <v-icon dark @click="dialog3 = true">add</v-icon>
                                    </v-btn>
                                  </v-toolbar>

                                  <v-list three-line>
                                    <template v-for="(item, index) in actions">
                                      <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                      >
                                        {{ item.header }}
                                      </v-subheader>

                                      <v-divider
                                        v-else-if="item.divider"
                                        :key="index"
                                        :inset="item.inset"
                                      ></v-divider>

                                      <v-list-tile
                                        v-else
                                        :key="item.title"
                                        avatar
                                        @click=""
                                      >
                                        

                                        <v-list-tile-content>
                                          <v-list-tile-title v-html="item.name"></v-list-tile-title>
                                          <v-list-tile-sub-title v-html="item.descrip"></v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-action>
                                          <v-progress-circular
                                            color="#2cd9c5"
                                            :rotate="270"
                                            :value="75"
                                          ></v-progress-circular>
                                        </v-list-action>
                                      </v-list-tile>
                                    </template>
                                  </v-list>
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

  import AreaChart from './components/areachart.vue'
  import BarChart from './components/barchart.vue'
  import Doughnut from './DoughnutCharts.js'
  import Breadcumb from './components/breadcumb.vue'
 
  export default {
    datacollection: null,
    components: {
      AreaChart,
      BarChart,
      Breadcumb,
      Doughnut
    },
    data () {
      return {
        dialog: false,
        drawer: null,
        dialog2: false,
        dialog3: false,
        headers1: [
          { align: 'left', sortable: false, text: 'Trabajador', value: 'calories', width: "40%" },
          { align: 'center', sortable: false, text: 'Progreso', value: 'fat',width: "50%" },
        ],
        itm: [
          
          { active: true, name: 'Jason Oner', rut:'11.111.111-1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          valueDeterminate: 50, },
          
          { active: true, name: 'Ranee Carlson', rut:'11.111.111-2', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          valueDeterminate: 65 },
          
          { name: 'Cindy Baker', rut:'11.111.111-3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          valueDeterminate: 40 },
          
          { name: 'Ali Connors', rut:'11.111.111-4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          valueDeterminate: 20 },

          { name: 'Erick Saldaño', rut:'11.111.111-3', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          valueDeterminate: 40 },
          
          { name: 'Gustavo Castillo', rut:'11.111.111-4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          valueDeterminate: 70 },

          { name: 'Jaime Sanz', rut:'11.111.111-4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          valueDeterminate: 50 },

          { name: 'Monica', rut:'11.111.111-4', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          valueDeterminate: 70 }

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
          { icon: 'home', text: 'Home', class: 'grey--text' },  
          { icon: 'assignment', text: 'Encuestas', class: 'grey--text' },
          { icon: 'adjust', text: 'Evaluaciones', class: 'grey--text' },
          { icon: 'power', text: 'Salir', class: 'selected_menu' },
        ],
        pes: [
          'Personales', 
          'Mi equipo', 
          'Equipo indirecto', 
          'Dashboard',
        ],
        text: 'pedazo de putanga',
        imgUsu: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
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
          { text: 'Competencias', value: 'notaCom' },
          { text: 'Objetivos', value: 'notaObj' },
          { text: 'Feedback', value: 'feedb' },
          { text: 'Accion', value: 'acc' }
        ],
        desserts2: [
          {
            estado: 'En proceso',
            usuario: { name: 'Jason Oner', rut:'11.111.111-1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
            notaFin: '60.0%',
            notaCom: '60.0%',
            notaObj: '60.0%',
            feedb: 'true',
            acc: 'Ver detalle',
          },
          {
            estado: 'Completada',
            usuario: { name: 'Jason Oner', rut:'11.111.111-1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
            notaFin: '56.0%',
            notaCom: '56.0%',
            notaObj: '56.0%',
            feedb: 'false',
            acc: 'Continuar',
          },
          {
            estado: 'En proceso',
            usuario: { name: 'Jason Oner', rut:'11.111.111-1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
            notaFin: '76.0%',
            notaCom: '76.0%',
            notaObj: '76.0%',
            feedb: 'false',
            acc: 'Continuar',
          },
          {
            estado: 'Inactiva',
            usuario: { name: 'Jason Oner', rut:'11.111.111-1', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
            notaFin: '40.0%',
            notaCom: '40.0%',
            notaObj: '40.0%',
            feedb: 'true',
            acc: 'Iniciar',
          }
        ],
        comp: [
          {
            titulo: 'Autoevaluaciones',
            porcent: 75,
          },
          {
            titulo: 'Descendentes',
            porcent: 12,
          }
        ],
        actions: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'Desayunos equipo',
            date: '01 Abril 2019, 12:01 hrs',
            descrip: 'Desayuno todos los lunes con el equipo por 4 meses',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            name: 'Reunion de equipo',
            date: '03 Mayo 2019, 12:54 hrs',
            descrip: 'Reunion semanal con galletas',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            name: 'Salidas',
            date: '18 Mayo 2019, 10:21 hrs',
            descrip: '1 vez al mes salir con el equipo',
          }
        ],
        feeds: [
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            name: 'Marcelo Scott',
            date: '01 Abril 2019, 12:01 hrs',
            descrip: 'Es un excelente lider, pero debes desligar responsabilidades y asumir nuevos desafios.',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            name: 'Colaborador',
            date: '03 Mayo 2019, 12:54 hrs',
            descrip: 'Tienes todo para ser un gran lider, pero debes enfocarte mas en tu trabajo y mantener siempre objetivos claros',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            name: 'Colaborador',
            date: '18 Mayo 2019, 10:21 hrs',
            descrip: 'Tienes todo para ser un gran lider, pero debes enfocarte mas en tu trabajo y mantener siempre objetivos claros',
          },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
            name: 'Marcelo Scott',
            date: '27 Junio 2019, 12:34 hrs',
            descrip: 'Tienes todo para ser un gran lider, pero debes enfocarte mas en tu trabajo y mantener siempre objetivos claros',
          }
        ],
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
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Dato 1', 'Dato 2', 'Dato 3', 'Dato 4',],
          datasets: [
            {
              label: 'Dato 1',
              backgroundColor: '#C65FE9',
              data: [4, 5, 8, 4]
            }, {
              label: 'Dato 2',
              backgroundColor: '#3085E5',
              data: [9, 7, 8, 6]
            }
             
          ]
        }
      }
    }

  }
</script>

<style lang="scss" scoped>

  .mmmargin50 {
    margin-top: 60%;
  }

  .selected_menu {
    color: #ee8147;
  }

  .mminside-graph {
    font-family: Nunito Sans;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.09;
    letter-spacing: normal;
    text-align: center;
    color: #778b97;
  }


  .mmcolaborator-name {
    width: 161px;
    height: 30px;
    font-family: Nunito Sans;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #778b97;
  }

  .mmcolaborator-position {
    height: 25px;
    font-family: Nunito Sans;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #778b97;
  }


  .mmmargin5 {
    margin: 5%;
  }

  div.apexcharts-menu  {
    background-color: #ddd;
    color: #000;
  }

  .mmtable .v-table tbody tr :not(:last-child) {
    border-bottom: none;
  }

  table.v-table thead tr th.column.text-xs-left {
    background-color: #fafafa;
  }

  tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, .05);
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

  .mmtableworker .v-table tbody tr td{
    padding: 15px 10px;
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
    color: #778b97;
    margin-bottom: 40px;
  }

  .mmname {
    font-family: Nunito Sans;
    font-size: 28px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #778b97;
    margin-bottom: 5px;
  }

  .v-breadcrumbs {
    margin-top:1%;
    margin-left: 23%;
  }

  .v-list__tile__title {
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #778b97;
  }

  .v-list__tile {
    margin-bottom:15px;
  }

  .v-navigation-drawer > .v-list .v-list__tile {
    margin-bottom: 10px;
  }

  .mmsidebar {
    padding-top: 2%;
    box-shadow: 5px 10px 30px 0 rgba(41, 26, 204, 0.12);
    width: 250px
  }

  .mmavatar {
    margin-top: 20%;
  }

  .mmcargo {
    color: #778b97;
  }

  .mmtitle i {
    line-height: 1.5px;
  }


  .mmtabs-padding {
    border-bottom: 0.02em solid #ccc;
    padding-bottom:25px;
  }

  $input-height: 40px;
  $input-border-radius: 8px;

  .v-text-field {
    position: relative; // Allow label positioning (children cannot have "position")
    margin-top: 28px; // Add space for fixed label

    // Having relative position messes up labels.
    //   Labels must be positioned relative to ".v-text-field" (icon issues)
    .v-input__control,
    .v-input__slot,
    .v-text-field__slot,
    .v-menu,
    .v-menu__activator {
      position: unset;
    }

    // Align appended/preppended outer icons properly (must be fixed)
    .v-input__append-outer,
    .v-input__prepend-outer {
      margin-top: 8px;
      margin-bottom: 8px;
    }
    // Align appended/preppended inner icons properly (can use flex)
    .v-input__append-inner,
    .v-input__prepend-inner {
      align-self: center;
      margin: 0;
      padding: 0;
    }
    .v-input__prepend-inner {
      margin-right: 8px;
    }
    .v-input__append-inner {
      margin-left: 8px;
    }

    // Input component/icons (above details)
    .v-input__slot {
      height: $input-height;
      padding: 4px 8px;
      border: 1px solid #bccaca;
      border-radius: $input-border-radius;
      transition: border-color 0.2s ease-in-out;

      // Remove default input underline
      &:before {
        display: none;
      }
      &:after {
        display: none;
      }
      
      input {
        padding: 0; // Reset padding
      }

      label {
        transform: translateY(-32px); // Position label vertically
        font-size: 18px;
        transition: color 0.2s ease-in-out;
      }
    }

    // Disabled input
    &.v-input--is-disabled {
      .v-input__slot {
        background-color: #eeeeee;
      }
    }

    // Error state
    &.v-input--has-state.error--text:not(.v-input--is-focused) {
      .v-input__slot {
        border-color: #ff5252; // Replacement for 'underline' behaviour
      }
    }

    // Highlight currently focused field
    &.v-input--is-focused {
      .v-input__slot {
        border-color: #04b7bd; // Replacement for 'underline' behaviour
      }

      // When errors fields are focused only the border should change,
      //   and all other error colours should remain (label, icons, etc).
      &:not(.v-input--has-state):not(.error--text) {
        .v-label {
          color: #04b7bd !important; // Vuetify override (".primary--text")
        }

        // Focused icon colours
        .v-input__append-inner i,
        .v-input__append-outer i,
        .v-input__prepend-inner i,
        .v-input__prepend-outer i {
          color: #04b7bd !important; // Vuetify override (".primary--text")
          transition: color 0.15s ease-in-out; // Shorter transition to avoid "jump"
        }
      }
    }
    
    // Progress indicator
    .v-progress-linear {
      top: calc(#{$input-height} + 2px);
      left: #{$input-border-radius};
      width: calc(100% - #{$input-border-radius} * 2);
      border-radius: 2px;
    }
  }

  .menu__content--select {
    border-radius: 8px;
  }

  .v-list__tile__content {
    width: 50%;
  }

  .v-card .v-card--flat .v-sheet .theme--light {
    background-color: transparent;
  }


 

</style>

}
