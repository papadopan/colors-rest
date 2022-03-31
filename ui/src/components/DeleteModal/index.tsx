import React, { useEffect } from "react";
import { Modal, Space, Typography, notification } from "antd";
import { useDeleteColorMutation } from "../../store/features/userSlice";
interface Props {
  visible: boolean;
  itemToDelete: deleteItem;
  onClose: () => void;
}
interface deleteItem {
  name: string;
  hex: string;
}
const DeleteModal: React.FC<Props> = ({ visible, itemToDelete, onClose }) => {
  const [deleteColor, { data, isLoading, error, reset }] =
    useDeleteColorMutation();

  useEffect(() => {
    if (data) {
      reset();
      onClose();

      notification.success({
        message: "Color Removal",
        description: `${data.colors.name} color deleted`,
      });
    }
  }, [data, reset, onClose]);

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      title="Delete Colors"
      okText="Delete"
      okButtonProps={{
        danger: true,
        loading: isLoading,
        onClick: () => deleteColor({ name: itemToDelete.name }),
      }}
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Typography.Text>
          You are about to delete
          <Typography.Text code>{itemToDelete.name}</Typography.Text>
          color
        </Typography.Text>

        {/* {error && (
          <Typography.Text type="warning">
            {error?.data?.message}
          </Typography.Text>
        )} */}
      </Space>
    </Modal>
  );
};

export default DeleteModal;
