import '../../styles/footer.styl'
export default {
    data() {
        return {
            author: 'SilinDan'
        }
    },

    computed: {
        count() {
            return this.$store.state.count;
        }
    },

    render() {
        return (
            <div id="footer">
                <span>Written by {this.author} {this.count}</span>
            </div>
        )
    }
}