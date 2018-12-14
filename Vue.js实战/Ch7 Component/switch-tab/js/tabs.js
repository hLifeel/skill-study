Vue.component('tabs',{
    template:`
        <div class="tabs">
            <div class="tabs-bar">
                <div
                    v-for="(item,index) in navList"
                    :class="tabCls(item)"
                    @click="handleChange(index)">
                    {{item.label}}
                    <div class="closeBtn" v-if="item.closable" @click.stop="closePane(index)">X</div>
                </div>
            </div>   
            <div class="tabs-content">
                <slot></slot>
            </div>    
        </div>`,
    /*template:'\
        <div class="tabs">\
            <div class="tabs-bar">\
                <div\
                :class="tabCls(item)"\
                v-for="(item,index) in navList"\
                @click="handleChange(index)">\
                    {{item.label}}\
                </div>\
            </div>\
            <div class="tabs-content">\
                <slot></slot>\
            </div>\
        </div>',*/
    props:{
        value:{
            type:[String,Number]
        }
    },
    data(){
        return{
            currentValue:this.value,
            navList:[]
        }
    },
    methods:{
        tabCls:function(item){
            return [
                'tabs-tab',
                {
                    'tabs-tab-active':item.name===this.currentValue
                }
            ]
        },
        getTabs(){
            return this.$children.filter(function(item){
                return item.$options.name==='pane'
            })
        },
        getPanes(){
            return document.getElementsByClassName('pane');
        },
        updateNav(){
            this.navList=[];
            var _this=this;

            this.getTabs().forEach(function(pane,index){
                _this.navList.push({
                    label:pane.label,
                    name:pane.name||index,
                    closable:pane.closable
                });
                if(!pane.name) {
                    pane.name=index;
                }
                if(index===0){
                    if(!_this.currentValue){
                        _this.currentValue=pane.name||index;
                    }
                }
            });

            this.updateStatus();
        },
        updateStatus () {
            var tabs=this.getTabs(),
                _this=this;

            tabs.forEach(function(tab){
                return tab.show=tab.name===_this.currentValue;
            })
        },
        handleChange:function (index) {
            var nav=this.navList[index],
                name=nav.name;

            this.currentValue=name;
            this.$emit('input',name);
            this.$emit('on-click',name);
        },
        closePane:function(index){
            this.navList.splice(index,1);
        }
    },
    watch:{
        value: function(val){
            this.currentValue=val;
        },
        currentValue:function(newVal,oldVal){
            this.updateStatus();
            if(newVal>oldVal){
                this.getPanes()[newVal].classList.remove('currentPrevious','currentNext','next','previous');
                this.getPanes()[newVal].classList.add('next');
                this.getPanes()[oldVal].classList.remove('currentPrevious','currentNext','next','previous');
                this.getPanes()[oldVal].classList.add('currentPrevious');
            }else{
                this.getPanes()[newVal].classList.remove('currentPrevious','currentNext','next','previous');
                this.getPanes()[newVal].classList.add('previous');
                this.getPanes()[oldVal].classList.remove('currentPrevious','currentNext','next','previous');
                this.getPanes()[oldVal].classList.add('currentNext');
            }
        }
    }
});