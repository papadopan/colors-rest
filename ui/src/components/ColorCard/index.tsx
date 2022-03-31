import React, { useEffect } from "react";
import { Button, Card, Col, notification, Space, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useUpdateColorMutation } from "../../store/features/userSlice";

interface Props {
  item: ColorItem;
  onOpen: (item: ColorItem) => void;
}

interface ColorItem {
  name: string;
  hex: string;
}

const ColorCard: React.FC<Props> = ({ item, onOpen }) => {
  const [updateColor, { isSuccess, isError, reset }] = useUpdateColorMutation();

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: " Update Successful",
      });
      reset();
    }
    if (isError) {
      notification.error({
        message: "There was an error updating, please try again",
      });
      reset();
    }
  }, [isSuccess, isError, reset]);

  return (
    <Col xs={22} sm={18} md={12} lg={4}>
      <Card
        title={item.name}
        extra={
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => onOpen(item)}
          />
        }
      >
        <Space>
          <div
            style={{
              height: "20px",
              width: "20px",
              background: item.hex,
              borderRadius: "50%",
              border: item.hex === "#fff" ? "1px solid black" : undefined,
            }}
          />

          <Typography.Text
            editable={{
              onChange: (val) =>
                updateColor({
                  name: item.name,
                  hex: val,
                }),
            }}
          >
            {item.hex}
          </Typography.Text>
        </Space>
      </Card>
    </Col>
  );
};

ColorCard.propTypes = {};

export default React.memo(ColorCard);
