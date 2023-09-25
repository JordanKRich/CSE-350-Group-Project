#include <iostream>
#include <QApplication>
#include <QPushButton>

class ARAppGUI : public QWidget {
    Q_OBJECT
public:
ARAppGUI(QWidget *parent = 0) : QWidget(parent) {
    QPushButton *startButton = new QPushButton("Start", this);
    QPushButton *stopButton = new QPushButton("Stop", this);
    QPushButton *nextButton = new QPushButton("Next", this);
    QPushButton *previousButton = new QPushButton("Previous", this);
    QPushButton *pauseButton = new QPushButton("Pause", this);
    QPushButton *showButton = new QPushButton("Show", this);
    QPushButton *hideButton = new QPushButton("Hide", this);
    QPushButton *updateButton = new QPushButton("Update", this);

    connect(startButton, &QPushButton::clicked, this, &ARAppGUI::start);
    connect(stopButton, &QPushButton::clicked, this, &ARAppGUI::stop);
    connect(nextButton, &QPushButton::clicked, this, &ARAppGUI::next_step);
    connect(previousButton, &QPushButton::clicked, this, &ARAppGUI::previous_step);
    connect(pauseButton, &QPushButton::clicked, this, &ARAppGUI::pause);
    connect(showButton, &QPushButton::clicked, this, &ARAppGUI::show);
    connect(hideButton, &QPushButton::clicked, this, &ARAppGUI::hide);
    connect(updateButton, &QPushButton::clicked, this, &ARAppGUI::update);
    }    

public slots:
    void start() {
        std::cout << "ARAppGUI started" << std::endl;
        //Add AR Functionality
        printf("Hello World");
    }

    void stop() {
        std::cout << "ARAppGUI stopped" << std::endl;
        //Add AR Functionality
    }

    void next_step() {
        std::cout << "ARAppGUI next step" << std::endl;
        //Add AR Functionality
    }

    void previous_step() {
        std::cout << "ARAppGUI previous step" << std::endl;
        //Add AR Functionality
    }

    void pause() {
        std::cout << "ARAppGUI paused" << std::endl;
        //Add AR Functionality
    }

    void show() {
        std::cout << "ARAppGUI showed" << std::endl;
        //Add AR Functionality
    }

    void hide() {
        std::cout << "ARAppGUI hidden" << std::endl;
        //Add AR Functionality
    }

    void update() {
        std::cout << "ARAppGUI updated" << std::endl;
        //Add AR Functionality
    }

};

int main(int argc, char **argv) {
    QApplication app (argc, argv);

    ARAppGUI ARArg;
    ARArg.start();
    ARArg.show();
    ARArg.stop();
}
#include "ARAppGUI.moc"