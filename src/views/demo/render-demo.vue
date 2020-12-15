<script>
import slotTest from '@/components/slot-test'
export default {
    props: {
        level: {
            type: Number,
            default: 1
        }
    },
    components:{slotTest},
    // render(createElement) {
    //     console.log(this.$slots.default)
    //     return createElement('h' + this.level, this.$slots.default);
    // },
    render(createElement) {
        console.log(this.$slots.default)
        return createElement('div', {
            props: {}
        }, [
            createElement('h' + this.level, this.$slots.default),
            createElement('slot-test', {
                scopedSlots: {
                    'header': props => createElement('span', 'header1111'),
                    default: props => createElement('p', 'default222'),
                    'footer': props => createElement('h1', 'footer333')
                }
            })
        ])
    },
    data(){
        return{}
    },
    mounted() {
        console.log(this.$parent, this.$parent.$data)
    }
}
</script>
