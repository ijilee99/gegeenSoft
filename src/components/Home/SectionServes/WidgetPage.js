
import React, { Component } from 'react';
import './WidgetPage.css';
import { Container, Row ,Col} from 'reactstrap';
import { IconWidget } from './Widget';
import { iconWidgetsData } from './demo/widgetPage';
import WidgetTitle from './WidgetTitle/WidgetTitle';


class WidgetPage extends Component {
    render() {
        return (
            <section className="features-section spad">
                <Container >
                    <WidgetTitle />
                    <Row>
                        {iconWidgetsData.map(
                            ({ icon, title, subtitle }, i) => (
                                <Col xs="12" sm="4" className="feature-item">
                                    <IconWidget
                                        icon={icon}
                                        title={title}
                                        subtitle={subtitle}
                                    />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default WidgetPage;
