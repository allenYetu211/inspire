<style lang="scss" scoped>
    form{
          flex: row;
          display: flex;
    &>div.file-img-information{
      flex:3;
      margin-right:40px;
      div.upload-img{
        margin-bottom:20px;
        img{
          width:100%;
          box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.25);
        }
      }
      .file-img-imfor{
        p{
          padding:5px 0;
          font-family: Roboto-Bold;
          font-size: 12px;
          color: #222222;
          letter-spacing: 0.12px;
        }
      }
      span.infoamtions-r{
        font-family: Roboto;
        float: right;
      }
    }
   &>div.upload-information{
      flex:7;
      .upload-form-gurop{
        margin-bottom:15px;
        position:relative;
        button.search{
            position:absolute;
            right:5px;
            top:30px;
            border:none;
            background-color:transparent;
            width:30px;
            height:30px;
            padding: 0;
            i{
              top:0;
              left: 0;
            }
        }
        &>label,&>h5{
          display:block;
          padding:0 0 5px 0;
          font-family: Roboto-Bold;
          font-size: 14px;
          line-height: 1.5;
          color: #222222;
        }
        .gurop-radio{
          background: #EFEFEF;
          border-radius:5px;
          display: flex;
          padding:1px;
            .platform-laber{
              position:relative;
              flex:1;
              line-height:40px;
              padding:1px;
              label{
                width: 100%;
                padding:0 1px;
                background-color:#fff;
                text-align:center;
                cursor: pointer;
                &.active{
                  background-color: transparent;
                }
              }
            input[type="radio"] {
              position:absolute;
              top:0;
              left:0;
              opacity:0;
            }
          }
        }
        input[type="text"] {
          width:100%;
          border:none;
          background: #f4f4f4;
          
          border-radius: 5px;
          height:40px;
          font-size:14px;
          padding:10px 15px;
        }
        input::placeholder{
          color:#D7D7D7;
          font-family: Roboto-Light;
        }
      }
    }
    ._Apps{
      background:#f4f4f4;
      border-radius: 5px;
      margin:5px 0;
      max-height: 210px;
      overflow:scroll; 
      ._AppItem{
          display:flex;
          flex:row;
          border-bottom:1px solid #dcdcdc;
          height:60px;
          padding: 5px 0;
          padding:10px 12px;
          &:last-child{
            border:none;
          }
          &>div{
            &:first-child{
              width:40px;
              margin-right:12px;
            }
            &:last-child{
              flex:7;
               .appName{
                font-size:14px;
                font-family: Roboto-Bold;
                line-height:1.5;
              }
              .artistName{
                font-size:12px;
                font-family: Roboto-lignt;
                line-height:1.5;
                color:#aaa;
              }
            }
          }
          img{
            width:40px;
            border-radius:9px;
          }
        }
    }
  }
    .category-checkbox{
      float: left;
      width: 25%;
      margin:5px 0;
      position:relative;
      font-size:12px;
          input{
            // opacity: 0;
          }
           input:checked + i {
              background-position: -120px -120px;
            }
          label{
            line-height:20px;
            padding-left:25px;
          }
      // &.active{
      //   i.sprite_checkbox{
      //     background-position: -120px -120px;
      //   }
      // }
          i{  
            position: absolute;
            z-index:-1;
            left: -3px;
            top: 0;
            display: block;
            width: 20px;
            height: 20px;
            background:url('../../static/svg_sprite.svg')no-repeat;
            &.sprite_checkbox{
              background-position: -140px -120px;
            }
      }
}
 
    .upload-btn{
      button{
          color:#222;
          font-size: 14px;
          margin: 0 auto;
          height:40px;
          padding: 10px 25px;
          background-color: #FFFA00;
          border: none;
          border-radius: 3px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
        }
    }
  
</style>

<template>
     <div class="informations-uploade">
       <form>
                 <div class="file-img-information">
                    <div class="upload-img">
                      <img :src="ic.url">
                    </div>

                    <div class="file-img-imfor">
                      <p class="Platform">
                      Platform
                        <span class="infoamtions-r">{{ic.Platform}}</span>
                      </p>
                      <p class="Dimension">
                        Dimension
                        <span class="infoamtions-r">{{ic.width}} * {{ic.height}}</span>
                      </p>
                      <p class="Size">
                        Size
                        <span class="infoamtions-r">{{ic.size}}KB</span>
                      </p>
                      <p class="Colors">
                      Colors
                        <span class="infoamtions-r"></span>
                      </p>
                    </div>

                  </div>

                  <div class="upload-information">
                      <div class="upload-form-gurop">
                        <label>Name</label>
                        <input type="text"  v-model="ic.name"  name="" placeholder="Input APP Name Search">
                        <button @click="_AppStoar" class="search"><i class="sprite_find"></i></button>
                        <!-- https://itunes.apple.com/search?term=xxx&country=CN&media=software&limit=10 -->
                 
                           <div class="_Apps">
                            <ul>

                                <li class="_AppItem" v-for="ics in getAppStore">
                                  <div class="appIcon">
                                    <img :src="ics.artworkUrl512">
                                  </div>
                                  <div> 
                                    <p class="appName">{{ics.trackName}}</p>
                                    <p class="artistName">{{ics.artistName}}</p>
                                  </div>
                                </li>

                              </ul>
                          </div>
                   

                      </div>
                     

                      <div class="upload-form-gurop">
                        <label>Link</label>
                        <input type="text" v-model="ic.link" name="">
                      </div>

                      <div class="upload-form-gurop">
                        <h5>Category</h5>
                        <div class="clearfix">
                           <div class="category-checkbox" v-for="(ck, ins) in category">
                              <input  v-model="ic.Category" :value="ins"  :id="'ckcategory_' + index + ins " type="checkbox" name="" style="display:none">
                              <i class="sprite_checkbox"></i>
                              <label @click="showcheck" :for="'ckcategory_' + index + ins " >{{ck}}</label>
                          </div>
                        </div>
                      </div>

                      <div class="upload-form-gurop">
                        <h5>Tags</h5>
                        <div>
                          <input type="text" name="">
                        </div>
                      </div>

                      <div class="upload-btn">
                        <button type="button" @click="_uplosings">Upload</button>
                      </div>

                  </div>
              </form>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['ic', 'index', 'category'],
  data () {
    return {
      checkedNames: [],
      getAppStore: []
    }
  },
  computed: {
    ...mapGetters([
      'loadtexts'
    ])
  },
  methods: {
    ...mapActions([
      'loadtext',
      'postimgdata'
    ]),
    _AppStoar () {
      this._searchShow = !this._searchShow
      let self = this
      self.$http.get('https://itunes.apple.com/search?term=' + self.ic.name + '&country=CN&media=software&limit=10')
      .then((response) => {
        let _results = JSON.parse(response.data)
        self.getAppStore = _results.results
      }).then((response) => {
      })
    },
    showcheck () {
      console.log(this.checkedNames)
    },
    _uplosings () {
      this.postimgdata(this.ic)
    }
  }
}
</script>
