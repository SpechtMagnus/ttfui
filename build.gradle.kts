plugins {
    //id("org.jetbrains.kotlin.js") version "1.3.70-eap-184"
    kotlin("js") version "1.3.70-eap-184"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    maven { setUrl("https://dl.bintray.com/kotlin/kotlin-eap") }
    maven("https://kotlin.bintray.com/kotlin-js-wrappers")
    mavenCentral()
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-js"))

    //React, React DOM + Wrappers
    implementation("org.jetbrains:kotlin-react:16.9.0-pre.89-kotlin-1.3.60")
    implementation("org.jetbrains:kotlin-react-dom:16.9.0-pre.89-kotlin-1.3.60")
    implementation(npm("react", "16.12.0"))
    implementation(npm("react-dom", "16.12.0"))

    // CSS
    implementation(npm("tachyons-sass"))

    testImplementation("org.jetbrains.kotlin:kotlin-test-js")
}

kotlin.target.browser { }
