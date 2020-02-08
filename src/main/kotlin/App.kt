import react.*
import react.dom.div
import react.dom.h1

class App: RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        h1 { +"Hallo Welt" }
    }
}
