class HomeScreen {

    get button() {
        return $('//' + 'android.view.View[@resource-id="tag_button"]');
    }

    get buttonLabel(){
        return $('android.widget.TextView')
    }

    get labelText() {
        return $('//' + 'android.widget.TextView[@resource-id="tag_label"]');
    }
}

module.exports = new HomeScreen();
