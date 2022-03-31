import React, { useCallback, useState } from "react";
import { Row, Grid, Spin, Typography, Empty } from "antd";
import { useFetchColorsQuery } from "../../store/features/userSlice";
import ColorCard from "../ColorCard";
import DeleteModal from "../DeleteModal";

interface ColorBase {
  name: string;
  hex: string;
}

const { useBreakpoint } = Grid;

const ColorList = () => {
  const screens = useBreakpoint();

  const [visible, setVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<ColorBase | null>(null);
  const onClose = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onOpen = useCallback(
    (item: ColorBase) => {
      setVisible(true);
      setItemToDelete(item);
    },
    [setVisible]
  );

  const { data, isLoading, error } = useFetchColorsQuery();

  if (isLoading) return <Spin />;

  if (error) return <div>There is an error</div>;

  return (
    <Row gutter={[16, 16]} justify={!screens.md ? "center" : undefined}>
      {itemToDelete && (
        <DeleteModal
          visible={visible}
          itemToDelete={itemToDelete}
          onClose={onClose}
        />
      )}
      {data?.colors.length === 0 ? (
        <Row style={{ width: "100%" }} justify="center">
          <Empty description="Let's add some" />
        </Row>
      ) : (
        data?.colors?.map((item) => (
          <ColorCard item={item} key={item.name} onOpen={onOpen} />
        ))
      )}
    </Row>
  );
};

export default ColorList;
